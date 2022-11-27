import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ list, changeToDoStatus }) => {
    return (
        <div className="ToDoList">
            {list.map((toDoItem) => (
                <ToDoItem
                    toDoItem={toDoItem}
                    key={toDoItem.id}
                    onChange={changeToDoStatus}
                />
            ))}
        </div>
    );
};

export default ToDoList;
