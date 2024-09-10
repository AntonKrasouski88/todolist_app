import React from 'react';
import {FilterType, TaskType} from '../App';
import {TodolistHeader} from "./TodolistHeader";
import {Button} from "./Button";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";

type TodolistProps = {
    todolistId: string,
    title: string,
    tasks: Array<TaskType>,
    filter: FilterType,
    removeTodolist: (todolistId: string) => void,
    removeTask: (taskId: string, todolistId: string) => void,
    changeTodolistFilter: (filter: FilterType, todolistId: string) => void,
    addTask: (title: string, todolistId: string) => void,
    changeTaskStatus: (taskId: string, statusTask: boolean, todolistId: string) => void,
}

export const Todolist = ({todolistId, title, tasks, removeTodolist, removeTask, changeTodolistFilter, addTask, changeTaskStatus, filter}: TodolistProps) => {
    return (
        <div className={'todolist-wrapper'}>
            <TodolistHeader title={title} todolistId={todolistId} removeTodolist={removeTodolist}/>
            <AddTaskForm addTask={addTask} todolistId={todolistId}/>
            <TasksList todolistId={todolistId} tasks={tasks} removeTask={removeTask} changeTaskStatus={changeTaskStatus}/>
            <div className={'btn-block'}>
                <Button title={"All"}
                        onClick={() => changeTodolistFilter("all", todolistId)}
                        style={filter === 'all' ? 'active-filter': 'todo-btn-filter'}/>
                <Button title={"Active"}
                        onClick={() => changeTodolistFilter("active", todolistId)}
                        style={filter === 'active' ? 'active-filter': 'todo-btn-filter'}/>
                <Button title={"Completed"}
                        onClick={() => changeTodolistFilter("completed", todolistId)}
                        style={filter === 'completed' ? 'active-filter': 'todo-btn-filter'}/>
            </div>
        </div>
    );
};