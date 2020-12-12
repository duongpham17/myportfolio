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
                        <th>% Change</th>
                        <th>Market Capital</th>
                        <th>Circulating Supply</th>
                        <th>Max Supply</th>
                    </tr>
                    </thead>
                    <tbody>
                    {crypto.map((el, index) => 
                    <tr key={index}>
                        <td>{el.rank}</td>
                        <td><img src={el.logo_url} alt="coin"/> {el.name} <p>({el.symbol})</p> </td>
                        <td>£{Math.abs(el.price).toFixed(5)}</td>
                        <td className={el["1d"].price_change_pct.includes("-") ? "loss" : "profit"}>{el["1d"].price_change_pct.includes("-") ? <RiArrowDownSFill/> : <RiArrowUpSFill/>} {el["1d"].price_change_pct} % </td>
                        <td>£{(el.market_cap / 1000000000).toFixed(3)}B</td>
                        <td>{el.circulating_supply}</td>
                        <td>{el.max_supply}</td>
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


