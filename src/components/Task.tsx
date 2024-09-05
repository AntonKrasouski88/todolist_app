import React, {ChangeEvent} from 'react';
import {Button} from "./Button";

type TaskProps = {
    taskId: string,
    title: string,
    isDone: boolean,
    removeTask: (taskId: string) => void,
    changeTaskStatus: (taskId: string, statusTask: boolean) => void,
}

export const Task = ({taskId, title, isDone, removeTask, changeTaskStatus}: TaskProps) => {
    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(taskId, e.currentTarget.checked)
    }

    return (
        <li key={taskId}>
            <input type="checkbox" checked={isDone} onChange={changeTaskStatusHandler}/>
            <span>{title}</span>
            <Button title={'X'} onClick={() =>removeTask(taskId)}/>
        </li>
    );
};
