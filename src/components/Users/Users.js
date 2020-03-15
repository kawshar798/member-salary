import React from 'react';
import fakeData from '../../fakeData/';
import './Users.css';
import { useState } from 'react';
import SingleUser from '../SingleUser/SingleUser';
import Salary from '../Salary/Salary';
const Users = () => {
    const [users, setUsers] = useState(fakeData);
    const [addFriend, setAddFriend] = useState([]);

    const handleAddFriend = (user) => {
        const newFriend = [...addFriend, user];
        setAddFriend(newFriend);
    }
    return (
        <div className="container">
            <div className="users-container">
                {
                    users.map(user => <SingleUser user={user} handleAddFriend={handleAddFriend}></SingleUser>)
                }
            </div>
            <div className="salary-summary">
                <div className="salary-inner-wrap">
                    <Salary addFriend={addFriend} ></Salary>
                </div>
            </div>
        </div>
    );
};

export default Users;