import React, {Component} from "react";
import "./todo-list-item.css"

export default class TodoListItem extends Component {
  render() {
    const {label, onDeleted, done, important, onMarkedDone, onMarkedImportant} = this.props;

    return <div className="todo-list-item">
      <div
        className={`todo-list-item-label ${important ? "todo-list-item-label--important" : ""} ${done ? "todo-list-item-label--done" : ""} `}
        onClick={onMarkedDone}>
        <span>{label}</span>
      </div>
      <div className="todo-list-item__button-group">
        <button type="button"
                className="uk-button uk-button-default todo-list-item__button"
                onClick={onMarkedImportant}>
          <i className="fa fa-exclamation"/>
        </button>
        <button type="button"
                className="uk-button uk-button-default todo-list-item__button"
                onClick={onDeleted}>
          <i className="fa fa-trash-o"/>
        </button>
      </div>
    </div>;
  }
}


