import React from 'react';

const Salary = (props) => {
    const addFriend = props.addFriend;
    const totalIncome = addFriend.reduce((totalIncome,user) => totalIncome + user.salary,0 );
    const addedFriend = addFriend.map(frnd=><li>${frnd.login}</li>);
    return (
        <div>
            <h2 className="">Total Friends:{addFriend.length} <span></span></h2>
                    <h2 className="">Total Yearly Income:{totalIncome} <span></span></h2>
                    <h2 className="">Added Friends list:</h2>
                    <ul>
                    {addedFriend}
                    </ul>
        </div>
    );
};

export default Salary;