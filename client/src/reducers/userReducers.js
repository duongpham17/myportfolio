/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_USER_DATA,
    LOGOUT,
} from '../actions/types'

const initialState = {
    user: null,
    loading: true,
}

export default function(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case LOAD_USER_DATA:
            return {
                ...state,
                user: payload,
                loading: false
            }
        case LOGOUT: 
            return {
                initialState
        }
            default:
                return state;
        }
}