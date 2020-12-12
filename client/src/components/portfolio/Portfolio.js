import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getMyPortfolio} from '../../actions/portfolioActions';

import Create from './Create';
import Info from './Info';

const Portfolio = ({portfolio:{crypto, portfolio, loading}, getMyPortfolio, getCryptoData}) => {
    
    useEffect(() => {
        getMyPortfolio()
    }, [getMyPortfolio])

    return(
        <div>
            {portfolio && crypto ? 
            <div>
                <Create />
                <Info data={portfolio} crypto={crypto} />
            </div>
            : 
            <div className="loading">{loading ? "Loading..." : ""}</div> 
            }
        </div>
    )
}

const mapStateToProps = state => ({
    portfolio: state.portfolioReducers
})

export default connect(mapStateToProps, {getMyPortfolio})(Portfolio)