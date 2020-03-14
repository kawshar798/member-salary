import React from 'react';
import fakeData from '../../fakeData/';
import './Users.css';
import { useState } from 'react';
import SingleUser from '../SingleUser/SingleUser';
const Users = () => {
    const [users,setUsers] =  useState(fakeData);

    const handleAddFriend = (user) =>{
console.log('clikc me');
    }
    return (
        <div className="container">
            <div className="users-container">
    {
        users.map(user => <SingleUser user={user}   handleAddFriend = {handleAddFriend}></SingleUser>)
    }
            </div>
            <div className="salary-summary">
                <div className="salary-inner-wrap">
                    <h2 className="">Total Friends: <span></span></h2>
                    <h2 className="">Total Yearly Income: <span></span></h2>
                    <h2 className="">Added Friends list: <span></span></h2>
                </div>
            </div>
        </div>
    );
};

export default Users;