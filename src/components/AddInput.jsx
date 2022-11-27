import React, { useState } from "react";

const AddInput = ({ addToDo }) => {
    const [toDo, setToDo] = useState({ name: "", done: false });

    const addNewToDo = (e) => {
        e.preventDefault();
        if (toDo.name === "") return;
        const newToDo = {
            ...toDo,
            id: Date.now(),
        };
        addToDo(newToDo);
        setToDo({ name: "", done: false });
    };
    return (
        <div className="AddToDo">
            <form>
                <input
                    name="ToDoName"
                    placeholder="ToDoName"
                    onChange={(e) => setToDo({ ...toDo, name: e.target.value })}
                    value={toDo.name}
                />
                <span onClick={addNewToDo} className="Add">
                    +
                </span>
            </form>
        </div>
    );
};

export default AddInput;
