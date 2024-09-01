import React from 'react';

type TaskProps = {
    taskId: string,
    title: string,
    isDone: boolean,
}

export const Task = ({taskId, title, isDone}: TaskProps) => {
    return (
        <li key={taskId}>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
        </li>
    );
};
