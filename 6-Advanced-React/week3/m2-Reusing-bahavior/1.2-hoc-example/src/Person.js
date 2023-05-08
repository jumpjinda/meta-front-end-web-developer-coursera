import React from 'react';

export default function Person(props) {
    return (
        <p>Hello, my name is {props.person.name}. I'm {props.person.age} years old and I have {props.person.skills} skills</p>
    );
}
