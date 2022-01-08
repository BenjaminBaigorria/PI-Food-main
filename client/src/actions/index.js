import axios from "axios";
import { GET_ALL_RECIPES,GET_RECIPE_ID ,SEARCH_RECIPE,ORDER_ABC,ORDER_RANK,POST_RECIPE, GET_DIETS, FILTER_DIETS} from "./ActionTypes";



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
  export function orderAbc(order){
    return async function(dispatch){
      return dispatch({
        type: ORDER_ABC,
        payload: order
      })
    }
  }
  export function orderRank(order){
    return async function(dispatch){
      return dispatch({
        type: ORDER_RANK,
        payload: order
      })
    }
  }
  export function postRecipel(payload){
    return async function(dispatch){
      const form=await axios.post("http://localhost:3001/recipe", payload)
      return dispatch({
        type: POST_RECIPE,
        payload: form
      })
    }
  }
  export function getDiets(){
    return async function(dispatch){
      const res=await axios.get("http://localhost:3001/types")
        return dispatch({
          type: GET_DIETS,
          payload: res.data
        })
      }
  }
  export function filterDiets(filter){
    return async function(dispatch){
      return dispatch({
         type: FILTER_DIETS,
         payload: filter
      })
    }
  }