import React, {useState} from 'react';
import './App.css';

const apiQuery = async () => {
    try {
        // Query from this: https://icanhazdadjoke.com
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json'
            }
        })
        return await response.json();
    }
    catch (error) {
        console.error(error);
    }
}

const App = () => {
    const [joke, setJoke] = useState(() => 'This is where you will see the joke');
    const [isLoading, setIsLoading] = useState(false);

    const loadJoke = () => {
        setIsLoading(true);
        apiQuery()
            .then((data) => {
            // Data sample
            // {
            //     "id": "R7UfaahVfFd",
            //     "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
            //     "status": 200
            // } from https://icanhazdadjoke.com/api
            setJoke(data.joke);
            setIsLoading(false);})
            .catch((error) =>  {
                setJoke('Something went wrong in loading the joke. Check URL of fetch or try again later.');
                setIsLoading(false);
        });
    };

    return (
        <>
            <h1>Check out the joke</h1>
            <div>Ding Bayeta</div>
            <button onClick={loadJoke}> Click me to load a joke </button>
            {isLoading ?
                <p> Loading another dad joke... </p> : <p>{joke}</p>}
            <style>
                {`
                    p {
                        border: black 1px solid;
                        padding: 10px;
                        display: inline-block;
                        margin: 5px; 
                    }
                `}
            </style>
        </>
    )
}

export default App;