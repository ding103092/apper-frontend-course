import React, { useState } from 'react';
import './App.css';

const App = () => {
    // Set states
    const [checklist, setChecklist] = useState([]);

    // Add item to list
    const pushItem = () => {
        const newItem = document.getElementById('list_item').value;
        if(newItem === "") return;
        setChecklist((prevChecklist) => [...prevChecklist, newItem]);
    }

    // Add item to list using Enter
    const pushItemByEnter = (event) => {
        if (event.key === "Enter") {
            pushItem();
        }
    };


    // Remove item from list
    const popItem = (index) => {
        setChecklist((prevChecklist) => {
            const updatedChecklist = [...prevChecklist];
            updatedChecklist.splice(index, 1);
            return updatedChecklist;
        });
    };

    // Render
    return (
        <>
            <h1>Checklist</h1>
            <div>Ding Bayeta</div>
            <h4>Add items if you want to</h4>
            <h4>Click an item to remove it</h4>
            <input type="text"
                   placeholder="Enter text here"
                   id='list_item'
                   onKeyDown={pushItemByEnter}
            />
            <button onClick={pushItem}>Add to checklist</button>

            <ul>
                {checklist.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => popItem(index)}
                        style={{
                            border: '1px solid #ccc',
                            display: 'inline-block',
                            padding: 10,
                            margin: 5
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App;