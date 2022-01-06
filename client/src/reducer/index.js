import { GET_ALL_RECIPES ,GET_RECIPE_ID,SEARCH_RECIPE} from "../actions/ActionTypes"
const initialState={
    recipes:[],
    details:[]
}


function rootReducer(state=initialState,action){
    switch (action.type) {
        case GET_ALL_RECIPES :
            return{
                ...state,
                recipes: action.payload
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
        default:
            return state
    }
}

export default rootReducer;