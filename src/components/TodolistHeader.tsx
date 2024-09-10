import React from 'react';
import {Button} from "./Button";

type TodolistHeaderProps = {
    title: string;
    todolistId: string,
    removeTodolist: (todolistId: string) => void,
}

export const TodolistHeader = ({title, removeTodolist, todolistId}: TodolistHeaderProps) => {
    return (
        <div className={'todolist-header'}>
            <h3>{title}</h3>
            <Button title={'X'} onClick={() => removeTodolist(todolistId)}/>
        </div>
    );
};