import React from 'react';
import './Salary.css'
const Salary = (props) => {
    const addFriend = props.addFriend;
    const totalIncome = addFriend.reduce((totalIncome, user) => totalIncome + user.salary, 0);
    const addedFriend = addFriend.map(frnd => <li><img src={frnd.avatar_url}  alt=""/>{frnd.login}</li>);
    return (
        <div>
            <h2 className="total-friend">Total Friends: <span>{addFriend.length}</span></h2>
            <h2 className="total-salary">Total  Salary: <span>${totalIncome}</span></h2>
            <h2 className="added-friend-list">Added Friends list:</h2>
            <ul>
                {addedFriend}
            </ul>
        </div>
    );
};

export default Salary;