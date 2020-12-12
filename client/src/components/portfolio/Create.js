import './Create.scss';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createNewPortfolio } from '../../actions/portfolioActions';

export const Create = ({createNewPortfolio}) => {
    const [create, setCreate] = useState(false)

    const [data, setData] = useState({
        label: ""
    })

    const onSubmit = (e) => {
        e.preventDefault()
        createNewPortfolio(data)
        setCreate(false)
    }

    return (
        <div className="create-portfolio-container">
            <button onClick={() => setCreate(!create)}>{ create ? "- Creating Portfolio" : "+ Create Portfolio"}</button>
            {create ? 
                <form onSubmit={e => onSubmit(e)}>
                    <input type="text" placeholder="Name of portfolio." onChange={e => setData({label: e.target.value})} required maxLength="15" minLength="3" /><br/>

                    <button>Create</button>
                </form>
            : "" }
        </div>
    )
}

export default connect(null, {createNewPortfolio})(Create)
