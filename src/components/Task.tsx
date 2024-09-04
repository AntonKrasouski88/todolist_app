import React from 'react';
import {Button} from "./Button";

type TaskProps = {
    taskId: string,
    title: string,
    isDone: boolean,
    removeTask: (taskId: string) => void,
}

export const Task = ({taskId, title, isDone, removeTask}: TaskProps) => {
    return (
        <li key={taskId}>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
            <Button title={'X'} onClick={() =>removeTask(taskId)}/>
        </li>
    );
};
