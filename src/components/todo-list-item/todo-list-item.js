import React, {Component} from "react";
import "./todo-list-item.css"

export default class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    };
    this.onLabelClick = this.onLabelClick.bind(this);
    this.onImportantButtonClick = this.onImportantButtonClick.bind(this);
  }

  onLabelClick() {
    this.setState((prevState) => {
      return {
        done: !prevState.done
      }
    })
  }

  onImportantButtonClick() {
    if (!this.state.done) {
      this.setState((prevState) => {
        return {
          important: !prevState.important
        }
      })
    }
  }

  render() {
    const {label} = this.props;
    const {done, important} = this.state;

    return <div className="todo-list-item">
      <div
        className={`todo-list-item-label ${important ? "todo-list-item-label--important" : ""} ${done ? "todo-list-item-label--done" : ""} `}
        onClick={this.onLabelClick}>
        <span>{label}</span>
      </div>
      <div className="todo-list-item__button-group">
        <button type="button"
                className="uk-button uk-button-default todo-list-item__button"
                onClick={this.onImportantButtonClick}>
          <i className="fa fa-exclamation"/>
        </button>
        <button type="button"
                className="uk-button uk-button-default todo-list-item__button">
          <i className="fa fa-trash-o"/>
        </button>
      </div>
    </div>;
  }
}


