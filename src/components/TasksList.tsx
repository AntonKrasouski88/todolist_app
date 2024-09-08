import React from 'react';
import {TaskType} from "../App";
import {Task} from "./Task";

type TasksListProps = {
    tasks: TaskType[],
    removeTask: (taskId: string) => void,
    changeTaskStatus: (taskId: string, statusTask: boolean) => void,
}

export const TasksList = ({tasks, removeTask, changeTaskStatus}: TasksListProps) => {
    //Returns a list of tasks
    const tasksList = tasks.length > 0 ? tasks.map(task => {
        return <Task taskId={task.id}
                     title={task.title}
                     isDone={task.isDone}
                     removeTask={removeTask}
                     changeTaskStatus={changeTaskStatus}/>
    }) : <div>No tasks</div>

    return (
        <ul>
            {tasksList}
        </ul>
    );
};
