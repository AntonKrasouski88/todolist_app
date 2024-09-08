import React from 'react';
import {FilterType, TaskType} from '../App';
import {TodolistHeader} from "./TodolistHeader";
import {Button} from "./Button";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";

type TodolistProps = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (taskId: string) => void,
    changeFilter: (filter: FilterType) => void,
    addTask: (title: string) => void,
    changeTaskStatus: (taskId: string, statusTask: boolean) => void,
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTask, changeTaskStatus}: TodolistProps) => {
    return (
        <div>
            <TodolistHeader title={title}/>
            <AddTaskForm addTask={addTask}/>
            <TasksList tasks={tasks} removeTask={removeTask} changeTaskStatus={changeTaskStatus}/>
            <div>
                <Button title={"All"} onClick={() => changeFilter("all")}/>
                <Button title={"Active"} onClick={() => changeFilter("active")}/>
                <Button title={"Completed"} onClick={() => changeFilter("completed")}/>
            </div>
        </div>
    );
};