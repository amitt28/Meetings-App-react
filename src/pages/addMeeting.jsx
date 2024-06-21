import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMeeting() {
    let titleInput = useRef();
    let timeInput = useRef();
    let descInput = useRef();
    let typeInput = useRef();
    let [loadingStatus, setloadingStatus] = useState(false)
    let navigate = useNavigate();
    
    function addMeetingHandler(){
        setloadingStatus(true);
        let newMeeting = {
            title: titleInput.current.value,
            date: timeInput.current.value,
            desc: descInput.current.value,
            type: typeInput.current.value,
        }
        fetch('https://meet-app-f1413-default-rtdb.firebaseio.com/meetings.json', {
            method: 'post',
            body: JSON.stringify(newMeeting)
        
    }).then(()=>{
        setloadingStatus(false);
        navigate('/');
    })
}

       return(
    <>
<section>

<div className="w-[400px] mx-auto text-left">
    
    <h1 className=" font-black text-4xl ">Host a New Meeting</h1>
    <p className=" mt-3 text-lg ">Please enter the following details to host a new Meeting</p>

       <div class="w-full mt-8">
    <input ref={titleInput} type="text" placeholder="Meeting Title" class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50" />
      </div>

      
      <div class="w-full  mt-8">
    <input ref={timeInput} type="datetime-local" placeholder="Meeting Date and Time" class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50" />
      </div>

      <div class="w-full mt-8">
    <input ref={typeInput} type="text" placeholder="Topic" class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50" />
      </div>

      
      <div class="w-full mt-8">
    <input ref={descInput} type="text" placeholder="Meeting Description" class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50" />
      </div>

      <button onClick={addMeetingHandler} className="bg-blue-500 text-white px-6 py-3 mt-4 rounded-lg hover:bg-blue-600 hover:shadow-lg flex gap-6 items-center"><span>Host Meeting</span> <span className={loadingStatus ? "loader" : ""}></span></button>


   </div>

</section>
    </>
 )
    
    }
export default AddMeeting;