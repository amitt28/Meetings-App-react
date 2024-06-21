import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/index'
import ErrorPage from './pages/ErrorPage'
import AddMeeting from './pages/addMeeting'

function App() {
 
return (
    <>
   
   
   <Routes>
    
    <Route path="/" element={<Index/>}/>
    <Route path="/add" element={<AddMeeting/>} />
    <Route path="*" element={<ErrorPage/>} />

   </Routes>

    
    </>
  )
}

export default App