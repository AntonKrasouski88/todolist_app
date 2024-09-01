import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

function App() {
    const tasks1: Array<TaskType> = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
    ]

    const tasks2: Array<TaskType> = [
        { id: 1, title: 'Keyboard', isDone: true },
        { id: 2, title: 'White mouse', isDone: true },
        { id: 3, title: 'Screen Dell', isDone: false },
        { id: 3, title: 'Macbook', isDone: false },
    ]

    return (
        <div className="App">
            <Todolist title={"What to learn"} tasks={tasks1}/>
            <Todolist title={"What to buy"} tasks={tasks2}/>
        </div>
    );
}

export default App;
