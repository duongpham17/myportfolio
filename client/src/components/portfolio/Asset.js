import './Asset.scss';
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import {TiDelete} from 'react-icons/ti';
import {IoIosTime} from 'react-icons/io';
import {deleteAssetFromPortfolio, trackPortfolioValuation } from '../../actions/portfolioActions';

const Asset = props => {
    const info = props.info;
    const data = props.data;
    const crypto = props.crypto;
    const deleteAssetFromPortfolio = props.deleteAssetFromPortfolio;
    const trackPortfolioValuation = props.trackPortfolioValuation;

    const [valuation, setValuation] = useState({
        total: ""
    })

    useEffect(() => {
        setValuation({
            total: !crypto ? "" : data.map(el => Math.abs(crypto[crypto.findIndex(asset => asset.symbol === el.name)].current_price) * el.amount)
        })
    }, [setValuation, crypto, data])

    const findAssetPrice = (asset) => { 
        const index = crypto.findIndex(el => el.symbol === asset)
        const price = crypto[index].current_price
        return price
    }

    //calculate total amount of money
    const calcTotal = !valuation.total || valuation.total.length === 0 ? "" : valuation.total.reduce((a, c) => a + c).toFixed(2)

    //calculate total profit
    const calcProfit = !info ? "" : (calcTotal - info.total).toFixed(2)

    //calculate days since clicking timestamp / tracking total
    const calcDays = !info.days ? "" : ((Date.now() - Date.parse(info.days)) / (24 * 60 * 60 * 1000) ).toFixed(2)

    //update portfolio date and total
    const updateTrackDate = (e) => {
        e.preventDefault()
        trackPortfolioValuation(info._id, {"total": calcTotal})
    }

    const percentageChange = (current, newValue) => (((newValue - current) /current) * 100)

    return (
        <div className="asset-portfolio-container">

            <div className="total-and-info">
                <button onClick={(e) => updateTrackDate(e)}><IoIosTime className="icon_s_black"/></button>
                <li>Total: £{calcTotal}</li><br/>
                <li className={calcProfit < 0 ? "loss" : "profit"}>Profit % {percentageChange(info.total, calcTotal).toFixed(2)} : £{info.total === 0 ?  "0" : <>{calcProfit}</> }</li> 
                <br/>
                <li>Days : {calcDays}</li>
            </div>

            {data.map((el, index) => 
                <div className="asset" key={index}>
                    <li><button onClick={() => deleteAssetFromPortfolio(info._id, el._id )}><TiDelete className="icon-delete"/></button></li>
                    <li>{el.name.toUpperCase()} </li>
                    <li className={percentageChange(el.price,findAssetPrice(el.name)) >= 0 ? "profit" : "loss" }> % {percentageChange(el.price,findAssetPrice(el.name)).toFixed(2)} </li> 
                    <li>: {el.amount} x £{findAssetPrice(el.name).toFixed(3)} </li>
                    <li>= £{(findAssetPrice(el.name) * el.amount).toFixed(2)}</li>
                </div>
            )}

        </div>
    )
} 

export default connect(null, {deleteAssetFromPortfolio, trackPortfolioValuation})(Asset)
