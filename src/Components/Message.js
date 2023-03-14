import React from 'react'
export default function Message(props){
   return (
    <tr>
        <td>{props.name}</td>
        <td>{props.time}</td>
        <td>{props.otp}</td>
    </tr>
        
    )
}