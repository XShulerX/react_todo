import React from "react";

const ToDoListGroups = ({ filter, onFilterChange }) => {
    return (
        <div className="ToDoListGroups">
            <label className="ToDoListGroup">
                <input
                    name="filter"
                    type="radio"
                    checked={filter === "todo"}
                    onChange={onFilterChange}
                    value="todo"
                    hidden
                />
                TO DO
            </label>
            <label className="ToDoListGroup">
                <input
                    name="filter"
                    type="radio"
                    checked={filter === "done"}
                    onChange={onFilterChange}
                    value="done"
                    hidden
                />
                DONE
            </label>
            <label className="ToDoListGroup">
                <input
                    name="filter"
                    type="radio"
                    checked={filter === "all"}
                    onChange={onFilterChange}
                    value="all"
                    hidden
                />
                ALL
            </label>
        </div>
    );
};

export default ToDoListGroups;
