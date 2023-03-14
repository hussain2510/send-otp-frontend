import React, { useEffect, useState } from 'react'
import "../styles/pages/Compose.css";

function Compose(props){

     const [randomValue,setRandomValue]=useState(0);

    useEffect(()=>{
       setRandomValue(Math.floor(100000 + Math.random() * 900000));
    },[])
    async function handleSubmit(e)
    {
        const mess={message:"Hi.Your OTP is:"+randomValue,phoneNumber:parseInt(props.phone)}
        console.log("dasd");
         e.preventDefault();
         await fetch('https://send-otp-backend.vercel.app/sendMessage', {
            mode:'cors',
            method: 'POST',
            body:JSON.stringify(mess) ,
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res =>{
            return res.json()})
        .then((data) => {
            if(data)
            {
                const message={
                    
                    name:props.name,
                    time:data.time,
                    otp:data.otp
                }
                console.log(message)
                fetch('https://send-otp-json.onrender.com/messages', {
            mode:'cors',
            method: 'POST',
            body:JSON.stringify(message) ,
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        }).then(r=>r.json()).then(d=>console.log(d)).catch(err=>console.log(err))
            }
            
           
          })
          .catch((error) => {
            console.log('error: ' + error);
          });
    }


    return(
        <div className='compose-box'>
        <textarea id="w3review" name="w3review" rows="4" cols="50" value={"Hi.Your OTP is:"+randomValue}></textarea>
  <br/>
  <input type="submit" onClick={handleSubmit} value="Submit" className='button-style'/>
        </div>
    )
}
export default Compose;