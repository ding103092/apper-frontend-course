import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const id = 'root';
const pw = '1234';

const Home = () => {
    const [loginSuccess, setLoginSuccess] = useState(false);

    const login = () => {
        const id_input = document.getElementById('id_input').value;
        const pw_input = document.getElementById('pw_input').value;
        if (id_input === id && pw_input === pw) {
            console.log('BRUH');
            setLoginSuccess(true);
        }
    };

    return (
        <>
            <input type="text" placeholder="Enter ID" id="id_input" />
            <input type="password" placeholder="Enter password" id="pw_input" />
            <Button text="Login" onClick={login} />
            {loginSuccess && <p>Success</p>}
        </>
    );
};

const Button = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>;
};

function App() {
    return <Home />;
}

export default App;