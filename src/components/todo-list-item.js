import React from "react";

const TodoListItem = (props) => {
  const {label, important = false} = props;
  const style = {
    color: important ? "red" : ""
  };

  return <span style={style}>{label}</span>;
};

export default TodoListItem;

