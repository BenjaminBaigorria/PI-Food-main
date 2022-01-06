import axios from "axios";
import { GET_ALL_RECIPES,GET_RECIPE_ID ,SEARCH_RECIPE} from "./ActionTypes";



export function getAllRecipes(){
    return async function(dispatch){
        var json= await axios.get("http://localhost:3001/recipe");
        return dispatch({
            type: GET_ALL_RECIPES,
            payload: json.data
        })
    }
}
export function getId(id){
    return async function(dispatch){
      const det= await axios.get("http://localhost:3001/recipe/"+id)
      if(det.data.length){
        return dispatch({
          type: GET_RECIPE_ID,
          payload: det.data
        })
      }
      else{
        return dispatch({
          type: GET_RECIPE_ID,
          payload:[det.data]
        })
      }
    }
  }

  export function searchRecipe(name){
    return async function(dispatch){
      const json=await axios.get("http://localhost:3001/recipe?name="+name)
      return dispatch({
        type: SEARCH_RECIPE,
        payload: json.data
      })
    }
  }