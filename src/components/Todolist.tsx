import React from 'react';
import { TaskType } from '../App';
import {TodolistHeader} from "./TodolistHeader";

type TodolistProps = {
    title: string,
    tasks: Array<TaskType>
}

export const Todolist = ({title}: TodolistProps) => {

    return (
        <div>
            <TodolistHeader title={title}/>
            <div>
                <input placeholder={"Task name"}/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                <li><input type="checkbox" checked={false}/> <span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};