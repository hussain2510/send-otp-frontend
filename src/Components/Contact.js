import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/components/Contact.css"

function Contact(props){
  console.log(props)
 const navigate=useNavigate();
    function handleClick(e)
    {
        console.log(e.target);
        navigate('/contacts/'+e.target.id);
       
    }
    return (
        <p   onClick={handleClick} id={props.keyId}>{props.name}</p>
    )
}
export default Contact;