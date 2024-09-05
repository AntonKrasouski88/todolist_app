import React from 'react';
import {FilterType, TaskType} from '../App';
import {TodolistHeader} from "./TodolistHeader";
import {Task} from "./Task";
import {Button} from "./Button";
import {AddTaskForm} from "./AddTaskForm";

type TodolistProps = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (taskId: string) => void,
    changeFilter: (filter: FilterType) => void,
    addTask: (title: string) => void,
    changeTaskStatus: (taskId: string, statusTask: boolean) => void,
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTask, changeTaskStatus}: TodolistProps) => {
    //Returns a list of tasks
    const tasksList = tasks.length > 0 ? tasks.map(task => {
        return <Task taskId={task.id}
                     title={task.title}
                     isDone={task.isDone}
                     removeTask={removeTask}
                     changeTaskStatus={changeTaskStatus}/>
    }) : <div>No tasks</div>

    return (
        <div>
            <TodolistHeader title={title}/>
            <AddTaskForm addTask={addTask}/>
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