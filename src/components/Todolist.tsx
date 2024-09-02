import React from 'react';
import { TaskType } from '../App';
import {TodolistHeader} from "./TodolistHeader";
import {Task} from "./Task";
import {Button} from "./Button";

type TodolistProps = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (taskId: number) => void,

}

export const Todolist = ({title, tasks, removeTask}: TodolistProps) => {
    //Returns a list of tasks
    const tasksList = tasks.length > 0 ? tasks.map(task => {
        return <Task taskId={task.id} title={task.title} isDone={task.isDone} removeTask={removeTask}/>
    }) : <div>No tasks</div>

    return (
        <div>
            <TodolistHeader title={title}/>
            <div>
                <input placeholder={"Task name"}/>
                <Button title={"+"}/>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </div>
    );
};