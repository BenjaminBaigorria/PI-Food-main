import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import "../styles/landing.css"



function Landing() {
    const history = useHistory();

    function handleHome(){
        history.push("/home")
    }
    return (
        <div className="landing">
            <h1 className='foods'>Foods</h1>
            <button className='button' onClick={()=>handleHome()}>Open Recipe Book</button>
        </div>
    )
}

export default Landing
