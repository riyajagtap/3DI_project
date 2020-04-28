import React from 'react'
import {NavLink} from 'react-router-dom'
import './Pages/Home.css'

export const Navigation = ()=>
<nav>
    <NavLink to='/login'>Login/SignUp</NavLink>
    <NavLink to='/pgdetails'>pgdetails</NavLink>

</nav>