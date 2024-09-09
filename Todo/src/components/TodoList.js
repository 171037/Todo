import React from 'react';
import { Button } from "antd";
import './TodoList.css';

const TodoList = ({ todoList, setTodoList }) => {
    const deleteTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    return (
        <div className="list-container">
            <h2 style={{marginTop:'0%'}}>TODO LIST</h2>
            <h4>{todoList.length}개의 할 일이 있습니다.</h4>

            <div className="memolist">
                {todoList.length > 0 ? (
                    todoList.map((todo) => (
                        <div className="item-wrap" key={todo.id}>
                            <div className="title-container">{todo.title}</div>
                            <div className="memo-container">{todo.content}</div>
                            <Button type="primary" danger onClick={() => deleteTodo(todo.id)} className="deleteBtn">X</Button>
                        </div>
                    ))
                ) : (
                    <div className="emptyList">할 일이 없습니다.</div>
                )}
            </div>
        </div>
    );
};

export default TodoList;
