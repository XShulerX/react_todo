import { useState } from "react";
import "./App.css";
import AddInput from "./components/AddInput";
import ToDoList from "./components/ToDoList";
import ToDoListGroups from "./components/ToDoListGroups";
import { useToDoItems } from "./hooks/useToDo";

function App() {
    const [toDoList, setToDoList] = useState([
        { id: 1, name: "ToDoList", done: true },
        { id: 2, name: "Checkbox functionality", done: false },
    ]);
    const [filter, setFilter] = useState("all");
    const sortedToDoItems = useToDoItems(toDoList, filter);

    const onFilterChange = (e) => {
        setFilter(e.target.value);
    };
    const addToDo = (newToDo) => {
        setToDoList([...toDoList, newToDo]);
    };
    const changeToDoStatus = (toDoItem) => {
        setToDoList((toDoList) => {
            return toDoList.map((item) => {
                return item.id === toDoItem.id
                    ? { ...item, done: !item.done }
                    : item;
            });
        });
    };

    return (
        <div className="App">
            <AddInput addToDo={addToDo} />
            <ToDoList changeToDoStatus={changeToDoStatus} list={sortedToDoItems} />
            <ToDoListGroups filter={filter} onFilterChange={onFilterChange} />
        </div>
    );
}

export default App;
