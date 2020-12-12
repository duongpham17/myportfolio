/* eslint-disable import/no-anonymous-default-export */
import {
    CRYPTO_DATA,
    MY_PORTFOLIO,
    TESTING,
} from '../actions/types'

const initialState = {
    portfolio: null,
    crypto: null,
    loading: true,
    test: null, 
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
        case TESTING: 
            return {
                ...state, 
                test: payload,
                loading: false,
            }
            
            
            default:
                return state;
        }
}