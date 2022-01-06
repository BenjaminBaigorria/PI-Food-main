import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch , useSelector} from "react-redux"
import { getId } from '../actions'
import { useEffect } from 'react'


function Details() {
    const {id}= useParams();
    const dispatch = useDispatch()
    const details = useSelector((state) => state.details);
    
    useEffect(() => {
        dispatch(getId(id))
    },[dispatch,id])


    var i=1;
    return (
        <div>
            <h5>{details[0]?.id}</h5>
            <h2>{details[0]?.title}</h2>
            <img src={details[0]?.image} alt='no img recipe'></img>
            <h2>Diets</h2>
            <div>
            {
              details[0]?.dataBase?
              details[0]?.diets.map(e=><h2 key={i++}>{e.name}</h2>):
              details[0]?.diets.map(el=><h2 key={i++}>{el}</h2>)
            }
            </div>
            <div>
                <div>
                <div dangerouslySetInnerHTML={{__html:details[0]?.summary }}></div>
                {/*CONSULTAR CON "?" PARA QUE NO HAYA PROBLEMAS CON LA API */}
                </div>   
                <h4>Rating: {details[0]?.spoonacularScore}</h4>
                <h4>Health Rating: {details[0]?.healthScore}</h4>
                <div>
                    {
                    details[0]?.dataBase?
                    <h2>k</h2>:
                    details[0]?.analyzedInstructions[0]?.steps?.map(e=>
                        <div>
                            <h2>Paso: {e.number}</h2>
                            <h4 key={i++}>{e.step}</h4>
                        </div>
                    )
                    }
                </div>
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