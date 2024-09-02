import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

export type FilterType = "all" | "active" | "completed"

function App() {
    const [tasks, setTasks] =useState<TaskType[]>([
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
        { id: 5, title: 'Typescript', isDone: false },
        { id: 6, title: 'NodeJS', isDone: false },
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    // Deletes a task
    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(task => taskId !== task.id))
    }

    //Change tasks filter
    const changeFilter = (filter: FilterType) => setFilter(filter)

    let tasksForTodolist = tasks
    if(filter === "active") {
        tasksForTodolist = tasks.filter(task => !task.isDone)
    }
    if(filter === "completed") {
        tasksForTodolist = tasks.filter(task => task.isDone)
    }

    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
