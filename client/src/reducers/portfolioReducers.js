/* eslint-disable import/no-anonymous-default-export */
import {
    CRYPTO_DATA,
    MY_PORTFOLIO,
    CREATE_PORTFOLIO,
    DELETE_PORTFOLIO,
    UPDATE_PORTFOLIO,
    LOGOUT,
} from '../actions/types'

const initialState = {
    portfolio: null,
    crypto: null,
    loading: true,
}

export default function(state = initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case CRYPTO_DATA: 
            return {
                ...state, 
                crypto: payload,
                loading: false
            }
        case MY_PORTFOLIO: 
            return {
                ...state, 
                portfolio: payload,
                loading: false,
            }
        case CREATE_PORTFOLIO:
            return{
                ...state,
                portfolio: [...state.portfolio, payload],
                loading: false
            }
        case DELETE_PORTFOLIO:
            return{
                ...state,
                portfolio: state.portfolio.filter(i => i._id !== action.id),
                loading: false
            }
        case UPDATE_PORTFOLIO:
            return{
                ...state,
                portfolio: state.portfolio.map(el => el._id === action.id ? payload : el),
            }
        case LOGOUT:
            return{
                ...state,
                portfolio: null
            }

            default:
                return state;
        }
}