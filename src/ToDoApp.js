import React, { useEffect, useState } from "react";

import AddTaskBar from "../Component/AddTaskBar";
import DisplayTasks from "../Component/DisplayTasks";

const ToDoApp = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const lastRecordedTasks = localStorage.getItem("tasks");
        if (lastRecordedTasks) {
            setTasks(JSON.parse(lastRecordedTasks));
        }
    }, []);

    const taskAdder = (task) => {
        const newTasks = [...tasks, task];
        localStorage.clear();
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        setTasks(newTasks);
    };

    const taskUpdater = (tasks) => {
        localStorage.clear();
        localStorage.setItem("tasks", JSON.stringify(tasks));
        setTasks(tasks);
    };

    return (
        <div className="ToDoApplication">
            <h1>Todo Application</h1>
            <AddTaskBar placeholder="New Task" tasksUpdater={taskAdder} />
            <DisplayTasks tasks={tasks} taskUpdater={taskUpdater} />
        </div>
    );
};

export default ToDoApp;
