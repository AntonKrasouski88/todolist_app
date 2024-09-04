import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";

type AddTaskFormProps = {
    addTask: (task: string) => void;
}

export const AddTaskForm = ({addTask}: AddTaskFormProps) => {
    const [taskText, setTaskText] = useState<string>('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length < 30) {
            setTaskText(e.target.value)
        }
    }

    const onAddTask = (task: string) => {
        if(task.trim()) {
            addTask(task.trim());
            setTaskText('')
        }
    }

    return (
        <div>
            <input value={taskText} placeholder={"Task name"} onChange={onChangeHandler}/>
            <Button title={"+"} onClick={() => onAddTask(taskText)}/>
        </div>
    );
};