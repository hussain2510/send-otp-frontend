import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Compose from './Compose';
import "../styles/pages/ContactDetails.css"
function ContactDetais()
{
    const params=useParams();
     const [detail,setDetail]=useState({});
     const [showBox,SetShowBox]=useState(false);
    useEffect(()=>{
       function getData(data){
         fetch(data, {
             
   headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
  }).then(response=>response.json())
            .then(data => {
                console.log(data);
                setDetail(data)
               
            }).catch((error) => {
            console.log('error: ' + error);
          });
       }
       
       getData('https://send-otp-json.onrender.com/contacts/'+params.id);
        
    },[]);
    function handleClick(){
        console.log(showBox);
        SetShowBox(!showBox);
    }

    return(
      <>
 
        <table>
  <tr>
    <th>Name</th>
    <th>Phone Number</th>
    <th>    </th>
  </tr>
  <tr>
    <td>{detail.firstName} {detail.lastName}</td>
     <td>{detail.contact}</td>
      <td><button onClick={handleClick} className='button-style'>Send Message</button></td>
  </tr>
  </table>
 <div className={showBox ? "compose-box-visible":"compose-box-not-visible"}>
        <Compose phone={detail.contact} name={detail.firstName+" "+detail.lastName}/>
  </div>
  </>
    )
}
export default ContactDetais;