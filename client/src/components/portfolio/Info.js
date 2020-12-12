import './Info.scss';
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import DeletePortfolio from './DeletePortfolio';
import AddAsset from './AddAsset';
import Asset from './Asset';

const Info = props => {

    const data = props.data
    const crypto = props.crypto

    return (
        <div className="info-container">
            {data.map((el, index) =>
                <div className="card" key={index}>
                    <DeletePortfolio id={el._id}/>
                    <p>{moment(el.createAt).format("lll").split(" ").slice(0, 3).join(" ")}</p>
                    <h2>{el.label}</h2>
                    <AddAsset crypto={crypto} id={el._id}/>
                    <Asset data={el.portfolio} crypto={crypto} info={el} />
                </div>
            )}
        </div>
    )
}

export default connect(null, {})(Info)
