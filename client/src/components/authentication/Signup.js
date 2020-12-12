import './authentication.scss';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {signup} from '../../actions/authActions';
import {setAlert} from '../../actions/alertActions';

import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';

const Signup = ({signup, setAlert, auth:{loggedOn}}) => {

    const [see, setSee] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
        user: "",
        password: "",
        passwordConfirm: "",
    })

    const {email, user, password, passwordConfirm} = formData

    const onSubmit = e => {
        e.preventDefault()
        if(password !== passwordConfirm){
            setAlert("Passwords Don't Match.", "danger")
        } else {
            signup(formData)
        }
    }

    if(loggedOn){
        return <Redirect to='/' />
    }

    const onChange = e => setFormData({...formData, [e.target.name] : e.target.value})

    return (
        <div className="authentication-container">
            <form onSubmit={e => onSubmit(e)}>
                <h2>Creating Account</h2>
                <p>Email</p>
                <input type="email" name="email" value={email}  onChange={e => onChange(e) } required minLength="4" maxLength="45"  />
                <p>Username</p>
                <input type="text"  name="user" value={user}     onChange={e => onChange(e) }  required minLength="4" maxLength="22" />
                <p className="see" onClick={() => setSee(!see) }>{see ?  <AiFillEye/> : <AiFillEyeInvisible/> } Password</p>
                <input type={see ? 'text' : 'password'} className={password === passwordConfirm && password.length === 8 ? "correct" : ""}  name="password" value={password} onChange={e => onChange(e) } required minLength="8"  maxLength="45"/>
                <p>Password Confirm</p>
                <input type={see ? 'text' : 'password'} className={password === passwordConfirm && password.length === 8 ? "correct" : ""}  name="passwordConfirm" value={passwordConfirm} onChange={e => onChange(e) } required minLength="8" maxLength="45" />
                <button>Create</button>

                <div className="link-to">
                    <Link to="/login">Already got account? Login</Link>
                </div>
                
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.authReducers
})

export default connect(mapStateToProps, {signup, setAlert})(Signup)
