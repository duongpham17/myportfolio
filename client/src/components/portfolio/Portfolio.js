import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getMyPortfolio} from '../../actions/portfolioActions';

import Create from './Create';
import Info from './Info';

const Portfolio = ({portfolio:{crypto, portfolio, loading}, getMyPortfolio}) => {
    
    useEffect(() => {
        if(!portfolio){
            getMyPortfolio()
        }
    }, [getMyPortfolio, portfolio])

    return(
        <div>
            {portfolio && crypto && !loading ? 
            <div> 
                <Create />
                <Info data={portfolio} crypto={crypto} />
            </div>
            : 
            <div className="loading" /> 
            }
        </div>
    )
}

const mapStateToProps = state => ({
    portfolio: state.portfolioReducers
})

export default connect(mapStateToProps, {getMyPortfolio})(Portfolio)