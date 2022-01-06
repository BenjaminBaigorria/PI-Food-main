import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchRecipe } from '../actions';


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
        <div>
            <input
              type="text" 
              placeholder="Recipes..."
              onChange={(e)=>handleChange(e)}>
            </input>
            <button
               type='submit'
               onClick={(e)=>submit(e)}>
               Search
            </button>
        </div>
    )
}

export default SearchBar
