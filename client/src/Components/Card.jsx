import React from 'react'
import { NavLink } from 'react-router-dom';

function Card(props) {
    var i=1;
    return (
        <div>
            <NavLink to={"/details/"+props.id}>
            <img src={props.image} alt='Recipe'/>
            <h2>{props.title}</h2>
            </NavLink>
            <h4>Diets</h4>
            <div>
                {props.diets.map(e=>(<h5 key={i++}>{e}</h5>))}
            </div>
        </div>
    )
}

export default Card
