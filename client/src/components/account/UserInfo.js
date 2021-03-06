import './UserInfo.scss';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {updateUserInfo} from '../../actions/userActions';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';

const UserInfo = ({user:{user}, updateUserInfo}) => {

    const [see, setSee] = useState(false)

    const [data, setData] = useState({
        User: "",
        email: "",
        password: "",
        passwordCurrent: ""
    })

    const {User, email, password, passwordCurrent} = data

    useEffect(() => {
        setData({
            User: !user ? "" : user.user,
            email: !user ? "" : user.email,
        })
    }, [setData, user])

    const onSubmit = (e) => {
        e.preventDefault()
        updateUserInfo(email, User, !password ? passwordCurrent : password, passwordCurrent)
    }

    const onChange = (e) => setData({...data, [e.target.name]: e.target.value})


    return (
        <div className="user-info-container">
            <h2>Account Information</h2>
            <form onSubmit={(e) => onSubmit(e)}>
                <p className="see-password" onClick={() => setSee(!see)}>{see ? <AiFillEye className="icon"/> : <AiFillEyeInvisible className="icon"/>} Enter current password to change information:</p>
                <input type={see ? "text" : "password"} name="passwordCurrent" value={passwordCurrent || ""} onChange={e => onChange(e)} minLength="8" required="" />

                <p>Username:</p>
                <input type="text" name="User" value={User} onChange={e => onChange(e)} />

                <p>Email:</p>
                <input type="email" name="email" value={email} onChange={e => onChange(e)} />

                <p className="see-password" onClick={() => setSee(!see)}>{see ? <AiFillEye className="icon"/> : <AiFillEyeInvisible className="icon" />} New Password:</p>
                <input type={see ? "text" : "password"} name="password" value={password || ""} onChange={e => onChange(e)} minLength="8" />

                <br/>
                {!passwordCurrent ? "" : passwordCurrent.length >= 8 ? <button>save</button> : ""}
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.userReducers
})

export default connect(mapStateToProps, {updateUserInfo})(UserInfo)
