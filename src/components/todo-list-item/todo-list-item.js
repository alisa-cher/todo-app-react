import React from "react";
import "./todo-list-item.css"

const TodoListItem = (props) => {
  const {label, important = false} = props;
  const style = {
    color: important ? "red" : ""
  };

  return <div style={style} className="todo-list-item">
    <div
      className="todo-list-item-label"
      style={style}>
      <span>{label}</span>
    </div>
    <div className="todo-list-item__button-group">
      <button type="button"
              className="uk-button uk-button-default todo-list-item__button">
        <i className="fa fa-exclamation"/>
      </button>
      <button type="button"
              className="uk-button uk-button-default todo-list-item__button">
        <i className="fa fa-trash-o"/>
      </button>
    </div>
  </div>;
};

export default TodoListItem;

