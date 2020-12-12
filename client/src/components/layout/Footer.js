import React from 'react';
import {ImArrowUp} from 'react-icons/im';
import {Link} from 'react-router-dom';

const Footer = () => {

    const arrowUp = () => {
        window.scroll({top: 0, behavior: "smooth"})
    }

    return (
        <footer>
            <button onClick={() => arrowUp()}><ImArrowUp size="1.5rem"/></button><br/>
            <li>&copy; my.portfolio</li>
            <br/>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
        </footer>
    )
}


export default Footer
