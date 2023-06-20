import React from 'react';
import logoImg from './../../../../src/assets/images/logo.png'
import {Link} from 'react-router-dom'
const Logo = () => {
    return (
       <Link to ='/'>
       <img src={logoImg} width='100' height='100'
       alt='logo'
       className='hidden md:block'
       ></img>

       </Link>
    )
};

export default Logo;