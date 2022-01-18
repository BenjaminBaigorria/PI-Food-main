import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchRecipe } from '../actions';
import "../styles/search.css"


function SearchBar() {

    const dispatch = useDispatch()
    const [name, setname] = useState("")

    function handleChange(e){
        e.preventDefault()
        setname(e.target.value)
    }
    function submit(e){
      e.preventDefault()
      dispatch(searchRecipe(name))
      
    }
  

    return (
        <div className='Search'>
            <input
              type="text" 
              placeholder=" . . ."
              onChange={(e)=>handleChange(e)}>
            </input>
            <button 
               type='submit'
               onClick={(e)=>submit(e)}>
               Search🔎
            </button>
        </div>
    )
}

export default SearchBar
