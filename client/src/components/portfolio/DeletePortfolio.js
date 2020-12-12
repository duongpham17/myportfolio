import './DeletePortfolio.scss';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import {deletePortfolio} from '../../actions/portfolioActions';
import {MdDelete} from 'react-icons/md';

const Delete = props => {
    
    const [sure, setSure] = useState("")
    const id = props.id;

    return (
        <div className="delete-btn">
            {sure === "sure" ? 
            <div className="ensure">
                <button onClick={() => setSure("")}>Return</button> 
                <button onClick={() => props.deletePortfolio(id)}>Sure?</button>
            </div>
            : 
            <button onClick={() => setSure("sure")}><MdDelete className="icon_s_black"/></button> }
        </div>
    )
}


export default connect(null, {deletePortfolio})(Delete)
