import React, { useState } from "react";
import propTypes from "prop-types";

const AddTaskBar = ({ tasksUpdater, placeholder }) => {
    const [taskText, setTasksText] = useState("");

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (taskText !== "") {
            const newTask = {
                id: Date.now(),
                taskText: taskText,
                isCompleted: false,
            };
            tasksUpdater(newTask);
            setTasksText("");
        }
    };

    const taskTextChangeHandler = (event) => {
        setTasksText(event.target.value);
    };

    return (
        <div className="addTaskBar">
            <form onSubmit={formSubmitHandler}>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={taskText}
                    onChange={taskTextChangeHandler}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

AddTaskBar.propTypes = {
    tasksUpdater: propTypes.func,
    placeholder: propTypes.string,
};

AddTaskBar.defaultProps = {
    tasksUpdater: null,
    placeholder: "",
};
export default AddTaskBar;
