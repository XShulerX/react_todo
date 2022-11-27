import { useMemo } from "react";

export const useToDoItems = (todoItems, filter) => {
    const sortedToDoItems = useMemo(() => {
        if (filter === "all") {
            return todoItems;
        }
        switch (filter) {
            case "done":
                return todoItems.filter((todoItem) => todoItem.done);
            case "todo":
                return todoItems.filter((todoItem) => !todoItem.done);
            default:
                return todoItems;
        }
    }, [filter, todoItems]);

    return sortedToDoItems;
};
