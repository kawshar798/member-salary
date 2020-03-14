import React from 'react';
import './SingleUser.css';

const SingleUser = (props) => {
    const { avatar_url,login,salary,email,phone} = props.user;
    return (
        <div className="singleuser">
            {console.log(props.user)}
            <div className="user-img">
<img src={avatar_url} alt="" />
            </div>
            <div className="user-info">
    <h2 className="user-name">{login}</h2>
    <h2 className="user-phone">{phone}</h2>
                <p className="user-mail">{email}</p>
    <p className="user-salary">${salary}</p>
                <button onClick={() => props.handleAddFriend(props.user)}>Add Friend</button>
            </div>
        </div>
    );
};

export default SingleUser;