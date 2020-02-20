import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='navbar'>
            <div><Link to='/'>Startsida</Link></div>
            <div><Link to='/att-gora'>Att göra</Link></div>
            <div><Link to='/filmer'>Filmer</Link></div>
        </div>
    )
}

export default Navbar;