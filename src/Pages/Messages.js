import React,{useEffect,useState} from 'react';
import Message from '../Components/Message';
export default function Messages()
{
    const [messages,setMessages]=useState([]);
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
                
                setMessages(data)
               
            }).catch((error) => {
            console.log('error: ' + error);
          });
       }
       getData('https://send-otp-json.onrender.com/messages?_sort=time&_order=desc');
    },[])

    return (
    <table>
  <tr>
    <th>Name</th>
    <th>Time</th>
    <th>Otp</th>
  </tr>
  
 {messages.map((message) => {
    
                  return (
                    
                            <Message name={message.name} otp={message.otp} time={message.time}/>
                    
                   
                  );
                })} 
  </table>
    )
}
