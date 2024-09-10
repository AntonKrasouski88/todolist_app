import React, {ChangeEvent} from 'react';
import {Button} from "./Button";

type TaskProps = {
    todolistId: string
    taskId: string,
    title: string,
    isDone: boolean,
    removeTask: (taskId: string, todolistId: string) => void,
    changeTaskStatus: (taskId: string, statusTask: boolean, todolistId: string) => void,
}

export const Task = ({todolistId, taskId, title, isDone, removeTask, changeTaskStatus}: TaskProps) => {
    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(taskId, e.currentTarget.checked, todolistId)
    }

    return (
        <li key={taskId}  className={'task'}>
            <input type="checkbox"
                   checked={isDone}
                   onChange={changeTaskStatusHandler}/>
            <span className={isDone ? 'is-done' : ''}>{title}</span>
            <Button title={'X'} onClick={() =>removeTask(taskId, todolistId)}/>
        </li>
    );
};
