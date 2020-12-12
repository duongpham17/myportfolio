import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getTestingData} from '../../actions/portfolioActions';

export const Testing = ({getTestingData, portfolio:{test}}) => {

    useEffect(() => {
        getTestingData()
    }, [getTestingData])

    console.log(test)

    return (
        <div>
            {!test ? " " : 
                <div className="loading">
                    {test.data[0].coat}
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    portfolio: state.portfolioReducers
})

export default connect(mapStateToProps, {getTestingData})(Testing)


