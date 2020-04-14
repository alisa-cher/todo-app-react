import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

const TodoList = (props) => {
  const {todos, onDeleted, onMarkedDone, onMarkedImportant, isFiltered} = props;

  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className={"list-group__item"}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onMarkedDone={() => onMarkedDone(id)}
          onMarkedImportant={() => onMarkedImportant(id)}
        />
      </li>
    );
  });

  return (
    <ul className={"list-group todo-list"}>
      {elements.length === 0 && isFiltered && <div>There is no items corresponding to your search.</div>}
      {elements.length === 0 && !isFiltered && <div>Congratulations! You've done everything.</div>}
      {elements}
    </ul>
  )
};

export default TodoList;
