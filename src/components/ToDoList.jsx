import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ list, changeToDoStatus, remove }) => {
    return (
        <div className="ToDoList">
            {list.map((toDoItem) => (
                <ToDoItem
                    toDoItem={toDoItem}
                    key={toDoItem.id}
                    remove={remove}
                    onChange={changeToDoStatus}
                />
            ))}
        </div>
    );
};

export default ToDoList;
