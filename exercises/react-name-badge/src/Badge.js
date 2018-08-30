import React from 'react';

const Badge = (props) => {
    return (
        <div>
            <header>Badge:</header>
            <p>Name: {props.fName} {props.lName}</p>
            <p>Phone: {props.phone}</p>
            <p>Place of Birth: {props.birthPlace}</p>
            <p>Favorite Food: {props.favFood}</p>
            <p>Email: {props.email}</p>
        </div>
    );
};

export default Badge