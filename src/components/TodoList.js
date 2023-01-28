import React from "react";
import TodoCard from "./TodoCard";

import classes from "./components.module.css";

const TodoList = ({
  search,
  todoList,
  editTodo,
  deleteTodo,
  completedOnChange,
}) => {
  return (
    <div className={classes.flexList}>
      {todoList.length > 0
        ? todoList.map((todo, i) => (
            <TodoCard
              key={todo.date}
              todo={todo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              completedOnChange={completedOnChange}
            />
          ))
        : search === ""
        ? "List empty!"
        : "Not found!"}
    </div>
  );
};

export default TodoList;
