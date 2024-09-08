import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

export type FilterType = "all" | "active" | "completed"

function App() {
    const [tasks, setTasks] =useState<TaskType[]>([
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: false },
        { id: v1(), title: 'Redux', isDone: false },
        { id: v1(), title: 'Typescript', isDone: false },
        { id: v1(), title: 'NodeJS', isDone: false },
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    // Deletes a task
    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(task => taskId !== task.id))
    }

    //Change tasks filter
    const changeFilter = (filter: FilterType) => setFilter(filter)

    //Add task in list
    const addTask = (title: string) => {
        setTasks(([{id: v1(), title: title, isDone: false}, ...tasks]))
    }

    const changeTaskStatus = (taskId: string, statusTask: boolean) => {
        setTasks(tasks.map(task => taskId === task.id ? {...task, isDone: statusTask}: task))
    }

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
                      filter={filter}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeTaskStatus}/>
        </div>
    );
}

export default App;
