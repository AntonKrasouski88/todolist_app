import React from 'react';
import { TaskType } from '../App';
import {TodolistHeader} from "./TodolistHeader";
import {Task} from "./Task";

type TodolistProps = {
    title: string,
    tasks: Array<TaskType>
}

export const Todolist = ({title, tasks}: TodolistProps) => {
    //Returns a list of tasks
    const tasksList = tasks.length > 0 ? tasks.map(task => {
        return <Task taskId={task.id} title={task.title} isDone={task.isDone}/>
    }) : <div>No tasks</div>

    return (
        <div>
            <TodolistHeader title={title}/>
            <div>
                <input placeholder={"Task name"}/>
                <button>+</button>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};