import React, { useState, useRef } from 'react';
import { Button } from "antd";
import {Input} from "antd";
import './TodoCard.css';
export default function TodoCard({ todoList, setTodoList }) {
    const newId = useRef(4);
    const [newMemo, setNewMemo] = useState("");

    const addTodo = () => {
        const newTodoObj = {
            id: newId.current++,
            content: newMemo,
            done: false,
        };
        setTodoList([...todoList, newTodoObj]);
        setNewMemo("");
    };

    return (
        <div className="card-container">
            <div className="todoWrap">
                <Input
                    className="input"
                    placeholder="메모"
                    value={newMemo}
                    onChange={(e) => setNewMemo(e.target.value)}
                />
                <Button type="primary" onClick={addTodo} className="cardButton">업로드</Button>
            </div>
        </div>
    );
}
