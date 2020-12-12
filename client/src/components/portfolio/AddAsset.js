import './AddAsset.scss';
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import {MdPlaylistAdd} from 'react-icons/md';

import {addAssetToPortfolio} from '../../actions/portfolioActions';

export const AddAssets = props => {
    const addAssetToPortfolio = props.addAssetToPortfolio;
    const id = props.id;

    const [pickAsset, setPickAsset] = useState(false)
    const [pickedAsset, setPickedAsset] = useState(false)

    const assetsAvailable = ["btc", "ada", "eth", "xrp", "qtum", "zil", "vet", "link", "ltc", "dash", "bnb", "eos"]

    const [data, setData] = useState({
        name: "",
        amount: ""
    })
    const {amount} = data

    const onSubmit = e => {
        e.preventDefault()
        addAssetToPortfolio(id, data)
        setPickAsset(false)
    }

    const pickedCrypto = (e, asset) => {
        e.preventDefault()
        setData({name: asset})
        setPickedAsset(true)
    }
    const onChange = e => setData({...data, [e.target.name]: e.target.value})

    return (
        <Fragment>
            <div className="add-asset-container">
                <button onClick={() => setPickAsset(!pickAsset)}><MdPlaylistAdd className="icon_s_black"/></button>
            </div>

            <div className="picking-asset-container">
                {pickAsset ? 
                    <div className="picking-asset-content">
                        {assetsAvailable.map((el, index) => 
                            <button className={`asset-btn ${data.name === el ? "picked" : ""}`} key={index} onClick={(e) => pickedCrypto(e, el)}>{el.toUpperCase()}</button>
                        )}

                        {pickedAsset ?
                        <form onSubmit={e => onSubmit(e)}>
                            <button>add</button>
                            <input type="number" placeholder="Enter Amount" name="amount" value={amount || ""} onChange={e => onChange(e)} required max="10000000"/>
                        </form> 
                        : "" }

                    </div>
                : "" }

            </div>
        </Fragment>
    )
}


export default connect(null, {addAssetToPortfolio})(AddAssets)
