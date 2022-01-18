import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch , useSelector} from "react-redux"
import { getId } from '../actions'
import { useEffect } from 'react'
import "../styles/detail.css"


function Details() {
    const {id}= useParams();
    const dispatch = useDispatch()
    const details = useSelector((state) => state.details);
    
    useEffect(() => {
        dispatch(getId(id))
    },[dispatch,id])
  
    console.log(details)

    var i=1;
    return (
        <div className='detail'>
            <h1>{details[0]?.title}</h1>
            <img src={details[0]?.image} alt='no img recipe'></img>
            <h2>DIETS</h2>
            <div className='diets'>
            {
              details[0]?.dataBase?
              details[0]?.diets.map(e=><h3 key={i++}>{e.name}</h3>):
              details[0]?.diets.map(el=><h3 key={i++}>{el}</h3>)
            }
            </div>
            <div>
                <div className='rathea'>
                <h5>Rating: {details[0]?.spoonacularScore} ⭐</h5>
                <h5>Health Rating: {details[0]?.healthScore} ❤️</h5>
                </div>
                <div>
                <div className='summary' dangerouslySetInnerHTML={{__html: details[0]?.summary }}></div>
                {/*CONSULTAR CON "?" PARA QUE NO HAYA PROBLEMAS CON LA API */}
                </div>   
                 {
                   details[0]?.analizedStructions || details[0]?.analyzedInstructions?
                   <div> 

                       <h2>How To</h2>
                    {
                    details[0]?.dataBase?
                    <h2 className='steps'>{details[0]?.analizedStructions}</h2>://modificar con analizedStructions
                    details[0]?.analyzedInstructions[0]?.steps?.map(e=>
                        <div className='steps'>
                            <h2>Step: {e.number}</h2>
                            <h4 key={i++}>{e.step}</h4>
                        </div>
                    )
                    }
                  </div>:<div></div>
                 } 
                
            </div>
            <div>
                <NavLink to="/home">Go Back</NavLink>
            </div>
        </div>
    )
}

export default Details
/*diets={
                  e.dataBase
                    ? e.diets.map((el) => el.name)
                    : e.diets.map((el) => el)
                } */