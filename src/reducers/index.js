import { FETCH_USER, FETCHED_USER, RECEIVE_ERROR } from "../constants/type-actions";

const initialState ={
    fetching: false,
    error: false,
    userData:{}
}

const gitLabReducer = (state = initialState, action) =>{

    switch(state){
        case FETCH_USER:
            return Object.assign({}, state,{
                fetching: true,
                error: false,
                userData:{}
            });
        case FETCHED_USER:
            return Object.assign({},state,{
                fetching: false,
                error: false,
                userData: action.data
            });
        case RECEIVE_ERROR:
            return Object.assign({}, state,{
                fetching: false,
                error: true
            })    
        default:
            return state;
    }

}


export default gitLabReducer;

