import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Contacts from "./Pages/Contacts"
import ContactDetais  from './Pages/ContactDetails';
import Messages from './Pages/Messages';
function App() {
  return (
   <>
      <Navbar/>
       <Routes>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/contacts/:id" element={<ContactDetais />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        
        {/* <Route path="/practise" element={<Practise />}></Route>
        <Route path="/" element={<Landing />}></Route>

        <Route path="/courses" element={<Courses />}></Route> */}
      </Routes>
   </>
  );
}

export default App;
