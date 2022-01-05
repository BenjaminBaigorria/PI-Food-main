import React from 'react'

function Card(props) {
    var i=1;
    return (
        <div>
            <img src={props.image} alt='Recipe'/>
            <h2>{props.title}</h2>
            <h4>Diets</h4>
            <div>
                {props.diets.map(e=>(<h5 key={i++}>{e}</h5>))}
            </div>
        </div>
    )
}

export default Card
