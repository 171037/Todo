import React, { useState } from 'react';
import './App.css';
import TodoCard from './components/TodoCard';
import TodoList from './components/TodoList';

const dummyData = [
];

function App() {
    const [todoList, setTodoList] = useState(dummyData);

    return (
        <div className="App">
            <div className='head'>
                    <div className='logo'>
                        <p style={{marginTop:'10px'}}>TODO</p>
                    </div>

            </div>
            <div className='main'>
                <div className='todo'>
                    <TodoList todoList={todoList} setTodoList={setTodoList} />
                    <TodoCard todoList={todoList} setTodoList={setTodoList} />
                </div>
            </div>
        </div>
    );
}

export default App;