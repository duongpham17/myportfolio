import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadUserData} from '../actions/userActions';
import {getCryptoData} from '../actions/portfolioActions';

const LoadUserData = ({auth:{loggedOn}, portfolio:{crypto}, getCryptoData, loadUserData}) => {

    useEffect(() => {
        if(loggedOn){
            loadUserData()
        }
    }, [loadUserData, loggedOn])

    useEffect(() => {
        if(!crypto) {
            getCryptoData()
        }
    })

    return <></>
}

const mapStateToProp = state => ({
    auth: state.authReducers,
    portfolio: state.portfolioReducers
})

export default connect(mapStateToProp, {loadUserData, getCryptoData})(LoadUserData)
