import React from 'react';
import {FilterType, TaskType} from '../App';
import {TodolistHeader} from "./TodolistHeader";
import {Button} from "./Button";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";

type TodolistProps = {
    title: string,
    tasks: Array<TaskType>,
    filter: FilterType,
    removeTask: (taskId: string) => void,
    changeFilter: (filter: FilterType) => void,
    addTask: (title: string) => void,
    changeTaskStatus: (taskId: string, statusTask: boolean) => void,
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTask, changeTaskStatus, filter}: TodolistProps) => {
    return (
        <div className={'todolist-wrapper'}>
            <TodolistHeader title={title}/>
            <AddTaskForm addTask={addTask}/>
            <TasksList tasks={tasks} removeTask={removeTask} changeTaskStatus={changeTaskStatus}/>
            <div className={'btn-block'}>
                <Button title={"All"}
                        onClick={() => changeFilter("all")}
                        style={filter === 'all' ? 'active-filter': 'todo-btn-filter'}/>
                <Button title={"Active"}
                        onClick={() => changeFilter("active")}
                        style={filter === 'active' ? 'active-filter': 'todo-btn-filter'}/>
                <Button title={"Completed"}
                        onClick={() => changeFilter("completed")}
                        style={filter === 'completed' ? 'active-filter': 'todo-btn-filter'}/>
            </div>
        </div>
    );
};