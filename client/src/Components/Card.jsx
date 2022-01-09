import React from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/card.css"
import "../styles/grid.css"

function Card(props) {
    var i=1;
    return (
        <div>
            <NavLink to={"/details/"+props.id}>
            <div>
              <img  src={props.image} alt='Recipe'/>
            </div>
            <h2>{props.title}</h2>
            </NavLink>
            <h4>Diets</h4>
            <div className=''>
                {props.diets.map(e=>(<h5  key={i++}>{e}</h5>))}
            </div>
        </div>
    )
}

export default Card
