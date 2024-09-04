import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {Button} from "./Button";

type AddTaskFormProps = {
    addTask: (task: string) => void;
}

export const AddTaskForm = ({addTask}: AddTaskFormProps) => {
    const [taskText, setTaskText] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTaskText(e.target.value);

    const onKeyHandler =(e: KeyboardEvent<HTMLInputElement>) =>e.key === 'Enter' && onAddTask();

    const onAddTask = () => {
        if(taskText.trim() && taskText.trim().length  < 30) {
            addTask(taskText.trim());
            setTaskText('')
        }
    }

    return (
        <div>
            <input value={taskText} placeholder={"Task name"} onChange={onChangeHandler} onKeyUp ={onKeyHandler}/>
            <Button title={"+"} onClick={onAddTask} />
        </div>
    );
};