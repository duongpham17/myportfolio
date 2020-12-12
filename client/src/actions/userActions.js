import {
    LOAD_USER_DATA,
} from './types';
import {setAlert} from './alertActions';
import Api from '../routing/Api';

//load user data if logged on
export const loadUserData = () => async dispatch => {
    try{
        const res = await Api.get(`/users/data`);
        dispatch({
            type: LOAD_USER_DATA,
            payload: res.data.user
        })
    } catch(err) {
        console.log('%c Failed to load user data', 'color: red')
    }
}


//update user information
export const updateUserInfo = (email, user, password, passwordCurrent) => async dispatch => {
    try{
        const config = { 
            headers:{
                "Content-Type" : "application/json"
            }
        };
        const body = {email, user, password, passwordCurrent}
        const res = await Api.patch(`/users/account`, body, config);
        dispatch({
            type: LOAD_USER_DATA,
            payload: res.data.user
        })
        dispatch(setAlert('New information saved.', 'success'))
    } catch(err) {
        console.log(err.response)
        if(err.response.data.error.code === 11000){
            dispatch(setAlert(`${err.response.data.error.keyValue.user || err.response.data.error.keyValue.email} - has been taken` , 'danger'))
        } else {
            dispatch(setAlert(err.response.data.message, 'danger'))
        }
    }
}
