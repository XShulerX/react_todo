import React from "react";

const ToDoItem = (props) => {
    return (
        <div className="ToDoItem">
            <label>
                <input
                    onChange={() => props.onChange(props.toDoItem)}
                    type="checkbox"
                    defaultChecked={props.toDoItem.done ? "checked" : ""}
                />{" "}
                {props.toDoItem.name}
            </label>
            <span onClick={() => props.remove(props.toDoItem)} className="DeleteToDoItem"> </span>
        </div>
    );
};

export default ToDoItem;
