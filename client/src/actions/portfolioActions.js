import {
    CRYPTO_DATA,
    MY_PORTFOLIO,
} from './types';

import {setAlert} from './alertActions';
import Api from '../routing/Api';
import axios from 'axios';

const defaultError = setAlert("Please Reload", "danger");

export const getCryptoData = () => async dispatch => {
    try{
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h`)
        dispatch({
            type: CRYPTO_DATA,
            payload: res.data
        })
    } catch(err) {
        console.log("getCryptoData bad request")
    }
}

//get portfolio
export const getMyPortfolio = () => async dispatch => {
    try{
        const res = await Api.get(`/portfolios`)
        dispatch({
            type: MY_PORTFOLIO,
            payload: res.data.portfolio
        })
    } catch (err) {
        dispatch(defaultError)
    } 
}

//create portfolio
export const createNewPortfolio = (data) => async dispatch => {
    try{
        const config = {
            headers:{
                "Content-Type" : "application/json"
            }
        }
        const res = await Api.post(`/portfolios/new`, data, config)
        dispatch({
            type: MY_PORTFOLIO,
            payload: res.data.portfolio
        })
        dispatch(setAlert(`New Portfolio Created`, "success"))
    } catch (err) {
        dispatch(defaultError)
    } 
}

//delete portfolio
export const deletePortfolio = (id) => async dispatch => {
    try{
        const res = await Api.delete(`/portfolios/${id}`)
        dispatch({
            type: MY_PORTFOLIO,
            payload: res.data.portfolio
        })
        dispatch(setAlert(`Portfolio Deleted`, "success"))
    } catch (err) {
        dispatch(defaultError)
    } 
}

//add asset to portfolio
export const addAssetToPortfolio = (id, data) => async dispatch => {
    try{
        const config = {
            headers:{
                "Content-Type" : "application/json"
            }
        }
        const res = await Api.put(`/portfolios/add/${id}`, data, config)
        dispatch({
            type: MY_PORTFOLIO,
            payload: res.data.portfolio
        })
        dispatch(setAlert(`Asset Added`, "success"))
    } catch (err) {
        dispatch(defaultError)
    } 
}

//delete asset from portfolio router.delete('/remove/:portId/:id',
export const deleteAssetFromPortfolio = (portId, assetId) => async dispatch => {
    try{
        const res = await Api.delete(`/portfolios/remove/${portId}/${assetId}`)
        dispatch({
            type: MY_PORTFOLIO,
            payload: res.data.portfolio
        })
        dispatch(setAlert(`Deleted Asset`, "success"))
    } catch (err) {
        dispatch(defaultError)
    } 
}

//add asset to portfolio
export const trackPortfolioValuation = (id, data) => async dispatch => {
    try{
        const config = {
            headers:{
                "Content-Type" : "application/json"
            }
        }
        const res = await Api.patch(`/portfolios/track/${id}`, data, config)
        dispatch({
            type: MY_PORTFOLIO,
            payload: res.data.portfolio
        })
        dispatch(setAlert(`Updated Tracking Date`, "success"))
    } catch (err) {
        dispatch(defaultError)
    } 
}
