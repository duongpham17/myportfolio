import './Navbar.scss';
import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/authActions';
import {RiAccountBoxLine, RiLogoutBoxRLine} from 'react-icons/ri';
import {AiFillHome} from 'react-icons/ai';

const Navbar = ({logout, auth:{loggedOn}}) => {

    return (
        <header className="navbar">
            <nav>
            <Link to="/"><AiFillHome className="icon_s_white"/></Link>
            <Link to="/portfolio">My.Portfolio</Link>
            <Link to="/test">Test</Link>
            </nav>

            <nav>
                {loggedOn ? 
                <Fragment>
                    <Link to="/account"><RiAccountBoxLine className="icon_s_white"/> Account</Link>
                    <Link to='/' className="logout" onClick={() => logout()}><RiLogoutBoxRLine className="icon_s_white"/> Logout</Link>
                </Fragment>
                : 
                <Fragment>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </Fragment>
                }
            </nav>
        </header>
    )
}

const mapStateToProps = state => ({
    auth : state.authReducers
})

export default connect(mapStateToProps, {logout})(Navbar)
