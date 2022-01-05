import React from 'react'
import { NavLink } from 'react-router-dom'

function Landing() {
    return (
        <div>
            <h1>Foods</h1>
            <NavLink to="/home">
                Open foods
            </NavLink>
        </div>
    )
}

export default Landing
