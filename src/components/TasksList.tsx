import React from 'react';
import {TaskType} from "../App";
import {Task} from "./Task";

type TasksListProps = {
    todolistId: string;
    tasks: TaskType[],
    removeTask: (taskId: string, todolistId: string) => void,
    changeTaskStatus: (taskId: string, statusTask: boolean, todolistId: string) => void,
}

export const TasksList = ({tasks, removeTask, changeTaskStatus, todolistId}: TasksListProps) => {
    //Returns a list of tasks
    const tasksList = tasks.length > 0 ? tasks.map(task => {
        return <Task todolistId={todolistId}
                     taskId={task.id}
                     title={task.title}
                     isDone={task.isDone}
                     removeTask={removeTask}
                     changeTaskStatus={changeTaskStatus}/>
    }) : <div>No tasks</div>

    return (
        <ul className={'tasks-list'}>
            {tasksList}
        </ul>
    );
};
