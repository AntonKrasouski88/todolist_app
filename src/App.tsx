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

type TodolistType = {
    id: string,
    title: string,
    filter: FilterType
}

type TaskStateType = {
    [todolistId: string]: TaskType[]
}

function App() {
    const todolist_1 = v1();
    const todolist_2 = v1();

    const [todolist, setTodolist] = useState<TodolistType[]>(
        [
            {id: todolist_1, title: "What to learn", filter: 'all'},
            {id: todolist_2, title: "What to buy", filter: 'all'},
        ]
    );

    const [tasks, setTasks] = useState<TaskStateType>( {
        [todolist_1]: [
            { id: v1(), title: 'HTML&CSS', isDone: true },
            { id: v1(), title: 'JS', isDone: true },
            { id: v1(), title: 'ReactJS', isDone: false },
            { id: v1(), title: 'Redux', isDone: false },
            { id: v1(), title: 'Typescript', isDone: false },
            { id: v1(), title: 'NodeJS', isDone: false },
        ],
        [todolist_2]: [
            { id: v1(), title: 'Milk', isDone: true },
            { id: v1(), title: 'Bread', isDone: true },
            { id: v1(), title: 'Books', isDone: false },
        ]
    })


    // Deletes a task
    const removeTask = (taskId: string, todolistId: string) => {
        const newStateTasks: TaskStateType = {...tasks, [todolistId]: tasks[todolistId].filter(task => task.id !== taskId) };
        setTasks(newStateTasks)
    }

    //Change tasks filter
    const changeTodolistFilter = (newFilterValue: FilterType, todolistId: string) => {
        const newState: TodolistType[] = todolist.map(t => t.id === todolistId ? {...t, filter: newFilterValue}: t)
        setTodolist(newState)
    }

    //Add task in list
    const addTask = (title: string, todolistId: string) => {
        const newTask: TaskType = {id: v1(), title: title, isDone: false};
        const newStateTasks: TaskStateType = {...tasks, [todolistId]: [newTask,...tasks[todolistId]]}
        setTasks(newStateTasks);
    }

    const changeTaskStatus = (taskId: string, statusTask: boolean, todolistId: string) => {
        const newStateTasks: TaskStateType = {...tasks, [todolistId]: tasks[todolistId].map(task => taskId === task.id ? {...task, isDone: statusTask }: task)};
        setTasks(newStateTasks);
    }

    const removeTodolist = (todolistId: string)=>{
        setTodolist(todolist.filter(task => task.id !== todolistId))
        delete tasks[todolistId]
        setTasks({...tasks})
    }

    const todolistComponents: JSX.Element[] = todolist.map((tl: TodolistType) => {
        let tasksForTodolist = tasks[tl.id]

        if(tl.filter === "active") {
            tasksForTodolist = tasks[tl.id].filter(task => !task.isDone)
        }
        if(tl.filter === "completed") {
            tasksForTodolist = tasks[tl.id].filter(task => task.isDone)
        }

        return (
            <Todolist
                todolistId ={tl.id}
                title={tl.title}
                tasks={tasksForTodolist}
                filter={tl.filter}
                removeTodolist={removeTodolist}
                removeTask={removeTask}
                changeTodolistFilter={changeTodolistFilter}
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}/>)
    })

        return (
        <div className="App">
            {todolistComponents}
        </div>
    );
}

export default App;
