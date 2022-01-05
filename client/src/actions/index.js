import axios from "axios";
import { GET_ALL_RECIPES } from "./ActionTypes";


export function getAllRecipes(){
    return async function(dispatch){
        var json= await axios.get("http://localhost:3001/recipe");
        console.log(json)
        return dispatch({
            type: GET_ALL_RECIPES,
            payload: json.data
        })
    }
}