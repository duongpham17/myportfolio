import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineMail} from 'react-icons/ai';
import {BiCookie} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';

const Privacy = props => {
    return (
        <div className="about-container">
            <p>
                <AiOutlineMail className="icon"/> On signing up you can give your real email or fake email. 
                Real email can be used to recover your account and fake email can only be used for login.  
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
