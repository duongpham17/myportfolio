import './Home.scss';
import React from 'react';
import { connect } from 'react-redux';
import{RiArrowUpSFill, RiArrowDownSFill} from 'react-icons/ri'

export const Home = ({portfolio:{crypto}}) => {

    return (
        <div className="home-container">
            {!crypto ? <div className="loading">Loading...</div> :
            <div className="table-content">
                <table>
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Asset</th>
                        <th>Price</th>
                        <th>24H % Change</th>
                        <th>Market Capital</th>
                        <th>Circulating Supply</th>
                    </tr>
                    </thead>
                    <tbody>
                    {crypto.map((el, index) => 
                    <tr key={index}>
                        <td>{el.market_cap_rank}</td>
                        <td><img src={el.image} alt="coin"/> <span>({el.symbol})</span> {el.id}  </td>
                        <td>£{Math.abs(el.current_price).toFixed(3)}</td>
                        <td className={el.price_change_percentage_24h < 0 ? "loss" : "profit"}>{Number(el.price_change_percentage_24h).toFixed(2) < 0 ? <RiArrowDownSFill/> : <RiArrowUpSFill/>} {Number(el.price_change_percentage_24h).toFixed(2) } % </td>
                        <td>{el.market_cap ? `£${(el.market_cap / 1000000000).toFixed(2)} B` : `£${(el.market_cap / 1000000).toFixed(2)} M`} </td>
                        <td>{el.circulating_supply ? `${(el.circulating_supply / 1000000000).toFixed(2)} B` : `${(el.circulating_supply / 1000000).toFixed(2)} M`} </td>
                    </tr>
                    )}
                    </tbody>
                </table>
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    portfolio : state.portfolioReducers
})

export default connect(mapStateToProps)(Home)


