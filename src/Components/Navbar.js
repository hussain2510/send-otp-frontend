import React from 'react'
import '../styles/components/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
        <nav className='nav-container'>
            <Link to='/contacts' className='nav-items'>
                Contacts
            </Link>
             <Link to='/messages' className='nav-items'>
                Outbox
            </Link>
        </nav>
        </>
    )
}
export default Navbar;