import './Navbar.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/authActions';
import {RiAccountBoxLine, RiLogoutBoxRLine} from 'react-icons/ri';
import {AiFillHome} from 'react-icons/ai';
import {MdAccountBalance} from 'react-icons/md';

const Navbar = ({logout, auth:{loggedOn}}) => { 
    return (
        <header className="navbar">
            <nav>
                <Link to="/"><AiFillHome className="icon_s_white"/></Link>
                <Link className="not-middle" to="/portfolio">My.Portfolio</Link>
            </nav>

            <nav>
                <Link className="middle" to="/portfolio">My.Portfolio</Link>
            </nav>

            <nav>
                {loggedOn ? 
                <div className="logged-on-container">
                    <button className="dropdown-btn"><MdAccountBalance className="icon_s_white"/></button>
                    <div className="dropdown-content">
                        <li><p><Link to="/account"><RiAccountBoxLine className="icon_s_white"/> Account</Link></p></li>
                        <li><p><Link to='/' onClick={() => logout()}><RiLogoutBoxRLine className="icon_s_white"/> Logout</Link></p></li>
                    </div>
                </div>
                : 
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
                }
            </nav>
        </header>
    )
}

const mapStateToProps = state => ({
    auth : state.authReducers
})

export default connect(mapStateToProps, {logout})(Navbar)
