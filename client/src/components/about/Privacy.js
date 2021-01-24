import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineMail} from 'react-icons/ai';
import {BiCookie} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';

const Privacy = props => {
    return (
        <div className="about-container">
            <p>
                <AiOutlineMail className="icon"/> On signing up you must give a real email, this will prevent bots from spamming fake accounts. 
                The real email account will help you recover your account in the case you forget your password.
            </p>
            
            <p>
                <BiCookie className="icon"/> This website only uses cookie to keep you logged in, this is for better users experience E.g you don't have to enter your login information everytime you refresh or reopen the website.
            </p>

            <p>
                <MdDelete className="icon"/> You can delete your account and erase any data at any given time. By going to <Link to="/account">Account</Link>. 
                Your account does not store any important information and passwords are encrypted with (SHA256).
            </p>
        </div>
    )
}

export default Privacy
