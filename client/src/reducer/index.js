import { GET_ALL_RECIPES ,GET_RECIPE_ID,SEARCH_RECIPE,ORDER_ABC, ORDER_RANK,POST_RECIPE,GET_DIETS, FILTER_DIETS} from "../actions/ActionTypes"
const initialState={
    recipes:[],
    allRecipes:[],
    details:[],
    diet:[]

}



function rootReducer(state=initialState,action){
    switch (action.type) {
        case GET_ALL_RECIPES :
            return{
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
        case GET_RECIPE_ID:
            return{
                ...state,
                details: action.payload
            }
        case SEARCH_RECIPE:
            return{
                ...state,
                recipes: action.payload
            }
        case ORDER_ABC:
            
            const order=action.payload==="Alfabetico +"?
                state.recipes.sort((a,b)=>{
                 if(a.title>b.title){return 1}
                 else if(a.title<b.title){return -1}      //---------2--------------6--------------8
                 else{return 0}
                })
            :
                state.recipes.sort((a,b)=>{
                  if(a.title>b.title){return -1}
                  else if(a.title<b.title){return 1}
                  else{return 0}
                })
                return {
                    ...state,
                    recipes:order
                }
        case ORDER_RANK:
            
            const orderR=action.payload==="Rating +"?
            state.recipes.sort((a,b)=>{
                return b.spoonacularScore-a.spoonacularScore
            }):
            state.recipes.sort((a,b)=>{
                return a.spoonacularScore-b.spoonacularScore
            })
            return {
                ...state,
                recipes:orderR
            }
        case POST_RECIPE:
            return{
               ...state
            }
        case GET_DIETS:
            return{
                ...state,
                diet: action.payload
            }
        case FILTER_DIETS:
            var arrDet=[]
           
            for(var i=0;i<state.allRecipes.length;i++){
              if(!state.allRecipes[i].dataBase){

                if(state.allRecipes[i]?.diets.includes(action.payload)){
                    arrDet.push(state.allRecipes[i])
                }
              }
              else{
                for(var j=0;j<state.allRecipes[i].diets.length;j++){
                    if(state.allRecipes[i].diets[j].name===(action.payload)){
                        arrDet.push(state.allRecipes[i])
                    }
                }
            }
            }
                
            return{
                ...state,
                recipes: arrDet
            }

        default:
            return state
    }
}

export default rootReducer;