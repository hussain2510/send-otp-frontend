import React, { useEffect } from 'react'
import { useState} from 'react'
import Contact from "../Components/Contact";
import "../styles/pages/Contacts.css"

function Contacts(){
    const [contacts,setContacts]=useState([]);
    
    useEffect(()=>{
       function getData(data){
         fetch(data, {
            method:"GET",
             mode:'cors',
   headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
  }).then(response=>response.json())
            .then(data => {
                console.log(data);
                
                setContacts(data)
               
            }).catch((error) => {
            console.log('error: ' + error);
          });
       }
       getData('https://send-otp-json.onrender.com/contacts');
        
    },[]);
  
    return (
    <table>
  <tr>
    <th>Name</th>
  </tr>
  
 {contacts.map((contact) => {
    
                  return (
                    <tr >
                        <td   >
                            <Contact name={contact.firstName+" "+contact.lastName} keyId={contact.id} />
                        </td>
                    </tr>
                   
                  );
                })} 
  </table>
    )
}
export default Contacts;


