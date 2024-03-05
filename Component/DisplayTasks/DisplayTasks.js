import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Test from "../Test";

const DisplayTasks = ({ tasks, taskUpdater }) => {
    const completeTaskHandler = (task) => {
        const updatedTasks = tasks.map((value, index) =>
            value === task ? { ...value, isCompleted: !value.isCompleted } : value
        );
        taskUpdater(updatedTasks);
    };

    const deleteTaskHandler = (task) => {
        const updatedTasks = tasks.filter((value) => value !== task);
        taskUpdater(updatedTasks);
    };

    return (
        <div className="displayTasks">
            <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
                {tasks.map((value, index) => {
                    return (
                        <li key={value.id} style={{ marginTop: "3px" }}>
                            <span
                                style={
                                    value.isCompleted ? { textDecoration: "line-through" } : null
                                }
                            >
                                {value.taskText}
                            </span>
                            <button
                                onClick={() => {
                                    completeTaskHandler(value);
                                }}
                            >
                                {!value.isCompleted ? "Complete" : "InComplete"}
                            </button>
                            <button
                                onClick={() => {
                                    deleteTaskHandler(value);
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
            <Link to="/test">To Test</Link>
        </div>
    );
};

DisplayTasks.propTypes = {
    tasks: propTypes.array,
    taskUpdater: propTypes.func,
};

DisplayTasks.defaultProps = {
    tasks: [],
    taskUpdater: () => { },
};

export default DisplayTasks;
