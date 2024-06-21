import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from '../components/card'

function Index() {
  let [meetings, setMeetings] = useState([]);
  let [filter, setFilter] = useState([]); 
  useEffect(()=>{
    fetch('https://meet-app-f1413-default-rtdb.firebaseio.com/meetings.json')
   .then((data)=>{return data.json()}).then((data)=>{
    let tempMeetings = [];
    for(let key in data){
      let meeting = {
        id: key,
        ...data[key]
      }
   tempMeetings.push(meeting)
    }
    setMeetings(tempMeetings)
  })
  

  }, [])

  function filterDevHandler(){
    setFilter('dev')
}
function filterOperationsHandler(){
    setFilter('operations')
}
function filterMarketingHandler(){
    setFilter('marketing')
}

   let filterMeetings = meetings;
if(filter == 'dev'){
        filterMeetings = meetings.filter(meeting => meeting.type == 'dev')
    }
    else if(filter == 'operations'){
        filterMeetings = meetings.filter(meeting => meeting.type == 'operations')

    }
    else if(filter == 'marketing'){
        filterMeetings = meetings.filter(meeting => meeting.type == 'marketing')

    }

  return (
    <>
      <section>
      <header className="py-4">
            <nav className="w-[990px] flex justify-between mx-auto align-center mb-10">
                <a href="" className="font-extrabold text-2xl">Meetings</a>
                <div className="flex gap-4 font-extrabold">
                    <Link to={'/add'}>Add Meetings</Link>
                </div>
            </nav>
        </header>

        <div className="text-center">
                
                <div className="flex justify-cente gap-4 mt-5">
                    <button onClick={filterDevHandler} className={filter == 'dev' ? "border border-orange-200 bg-orange-50 px-5 py-2 rounded-xl" : "border border-neutral-200 bg-neutral-50 px-5 py-2 rounded-xl"}>Developers</button>
                    <button onClick={filterOperationsHandler} className={filter == 'operations' ? "border border-orange-200 bg-orange-50 px-5 py-2 rounded-xl" : "border border-neutral-200 bg-neutral-50 px-5 py-2 rounded-xl"}>Operations</button>
                    <button onClick={filterMarketingHandler} className={filter == 'marketing' ? "border border-orange-200 bg-orange-50 px-5 py-2 rounded-xl" : "border border-neutral-200 bg-neutral-50 px-5 py-2 rounded-xl"}>Marketing</button>
                    
                    
                </div>
            </div>

       <div className="flex gap-3 mt-5">{
        
        filterMeetings.map((meeting)=>{
          return <Card title={meeting.title} date={meeting.date} desc={meeting.desc} />
        })
        }
        </div> 
       
      </section>
    </>
  );
}
export default Index;
