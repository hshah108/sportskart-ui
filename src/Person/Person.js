import React from 'react';
import './Person.css';

const person = (Props) => {
    return (
        <div className="Person">
            <p>I'm {Props.name}. My age is {Props.age}.</p>
            <p>{Props.children}</p>
        </div>
    );
}

export default person;
