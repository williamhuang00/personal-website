import React from 'react';
import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name} Email: ${email} Message: ${message}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name: </label>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <br></br>
            <label>Enter your email: </label>
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            <br></br>
            <label>Enter your message: </label>
            <input type="text" onChange={(e) => setMessage(e.target.value)}/>
            <br></br>
            <input type="submit" />
        </form>
    );
};

export default Form;