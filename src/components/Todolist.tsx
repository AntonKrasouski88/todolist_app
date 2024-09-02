import React from 'react';
import {FilterType, TaskType} from '../App';
import {TodolistHeader} from "./TodolistHeader";
import {Task} from "./Task";
import {Button} from "./Button";

type TodolistProps = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (taskId: number) => void,
    changeFilter: (filter: FilterType) => void,

}

export const Todolist = ({title, tasks, removeTask, changeFilter}: TodolistProps) => {
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
                <Button title={"All"} onClick={() => changeFilter("all")}/>
                <Button title={"Active"} onClick={() => changeFilter("active")}/>
                <Button title={"Completed"} onClick={() => changeFilter("completed")}/>
            </div>
        </div>
    );
};