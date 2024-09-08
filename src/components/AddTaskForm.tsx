import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {Button} from "./Button";

type AddTaskFormProps = {
    addTask: (task: string) => void;
}

export const AddTaskForm = ({addTask}: AddTaskFormProps) => {
    const [taskText, setTaskText] = useState<string>('');

    const [error, setError] = useState<string | null>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTaskText(e.target.value);

    const onKeyHandler =(e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' ? onAddTask() : setError(null)
    };

    const onAddTask = () => {
        if(taskText.trim() && taskText.trim().length  < 30) {
            addTask(taskText.trim());
            setTaskText('')
        } else {
            setError('Title is required')
        }
    }

    return (
        <div>
            <input value={taskText}
                   placeholder={"Task name"}
                   className={error ? 'error': ''}
                   onChange={onChangeHandler}
                   onKeyUp ={onKeyHandler}/>
            <Button title={"+"} onClick={onAddTask} />
            {error ? <div className={'error-message'}>{error}</div> : ''}
        </div>
    );
};