import React from 'react';
import './SingleUser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faPhoneVolume,faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'

const SingleUser = (props) => {
    const { avatar_url, login, salary, email, phone } = props.user;
    return (
        <div className="singleuser">
            {/* {console.log(props.user)} */}
            <div className="user-img">
                <img src={avatar_url} alt="" />
            </div>
            <div className="user-info">
                <h2 className="user-name">{login}</h2>
                <h2 className="user-phone"><FontAwesomeIcon icon={faPhoneVolume} /> {phone}</h2>
                <p className="user-mail"><FontAwesomeIcon icon={faEnvelopeOpenText} /> {email}</p>
                <p className="user-salary">${salary}</p>
                
                <button onClick={() => props.handleAddFriend(props.user)}><FontAwesomeIcon icon={faPlus} /> Add Member</button>
            </div>
        </div>
    );
};

export default SingleUser;