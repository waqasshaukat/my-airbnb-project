import React from 'react'

import {Link} from 'react-router-dom'


function Navbar() {
    return (
       <nav className='nav-wrapper transparent z-depth-0'>
           <div className='container'>
                <Link to='/' className='brand-logo'>
                    <img    src={require('../imgs/airbnb-logo.png')} 
                            height='70px' 
                            className='materialize-img'
                            alt='Airbnb'
                    />
                </Link>
                <ul className='right hide-on-med-and-down'>
                    <li ><Link to='signup' className='black-text'>Sign up</Link></li>
                    <li><Link to='/login' className='black-text'>Log in</Link></li>
                </ul>
           </div>
           
       </nav>
    )
}

export default Navbar
