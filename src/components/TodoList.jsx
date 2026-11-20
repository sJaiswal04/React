
import React, { useState } from 'react';

const ToDoList = () => {
    const [todo, setTodo] = useState([]);
    const [inputValues, setInputValues] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValues.trim()) {
            setTodo((prevTodo) => [...prevTodo, inputValues.trim()]);
            setInputValues("");
        }
    };
// input sey kuch value aai and usko updat kiye
    const handleChange = (e) => {
        setInputValues(e.target.value);
    };

    return (
        <div>
            <h1>Todo List</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValues}
                    onChange={handleChange}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add todo</button>
            </form>

            <ul>
                {todo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
