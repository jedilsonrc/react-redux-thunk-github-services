import { FETCHED_USER, FETCH_USER, RECEIVE_ERROR } from "../constants/type-actions";



export const fetch_post = () =>{
    return {
        type: FETCH_USER
    }    
}

export const receive_post = () =>{
    return {
        type: FETCHED_USER
    }
}


export const receive_error = () =>{
    return {
        type: RECEIVE_ERROR
    }

}