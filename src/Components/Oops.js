import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Oops() {
    return (
        <div>
            <h1>OOPPS</h1>
            <Link to='/'>Goto Homepage</Link>
            <NavLink to="/other">goto Other </NavLink>
        </div>
    )
}
