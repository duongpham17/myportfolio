import './Footer.scss';
import React, { Fragment } from 'react';
import {ImArrowUp} from 'react-icons/im';
import {Link} from 'react-router-dom';

const Footer = () => {

    const arrowUp = () => {
        window.scroll({top: 0, behavior: "smooth"})
    }

    return (
        <Fragment>
        <footer>
        <div className="footer-content">
            <button onClick={() => arrowUp()}><ImArrowUp size="1.5rem"/></button><br/>
            <li><Link to="/about" onClick={() => arrowUp()}>About</Link></li>
            <li><Link to="/privacy" onClick={() => arrowUp()}>Privacy</Link></li>
            <br/>
            <li>&copy; my.portfolio</li>
        </div>
        <div className="line line-1">
            <div className="wave wave-1" style={{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/portfolio-be0d6.appspot.com/o/wave1.png?alt=media&token=c8c364cc-863c-427f-979d-7dc6aadb5911)"}}></div>
        </div>
        <div className="line line-2">
            <div className="wave wave-2" style={{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/portfolio-be0d6.appspot.com/o/wave2.png?alt=media&token=ac4f6b02-c232-4982-bf90-d4af0c554d90)"}}></div>
        </div>
        <div className="line line-3">
            <div className="wave wave-3" style={{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/portfolio-be0d6.appspot.com/o/wave3.png?alt=media&token=7b52a14b-2dcd-4268-ac57-68f12644eda7)"}}></div>
        </div>
        </footer>
        </Fragment>
    )
}


export default Footer
