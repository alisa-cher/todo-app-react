import React, {Component} from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form/item-add-form";
import TODO_DATA from "./mocked-data";
import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: TODO_DATA
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onLabelClick = this.onLabelClick.bind(this);
    this.onImportantButtonClick = this.onImportantButtonClick.bind(this);
  }

  countDoneItems(items) {
    return items.filter((item) => item.done).length;
  }

  countTodoItems(items) {
    return items.length - this.countDoneItems(items);
  }

  deleteItem(id) {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      return {
        todoData: newArray
      };
    });
  }

  addItem(text) {
    const newEntry = {
      label: text,
      id: this.state.todoData.length + 1,
      important: false
    };
    this.setState(({todoData}) => {
      const newArray = [
        ...todoData,
        newEntry
      ];
      return {
        todoData: newArray
      }
    });
  }

  toggleProperty(array, id, propName) {
    const index = array.findIndex((el) => el.id === id);
    const newArray = [...array];
    const item = newArray[index];
    item[propName] = !item[propName];

    return {
      todoData: newArray
    };
  }

  onLabelClick(id) {
    this.setState(({todoData}) => this.toggleProperty(todoData, id, "done"));
  }

  onImportantButtonClick(id) {
    this.setState(({todoData}) => this.toggleProperty(todoData, id, "important"));
  }

  render() {
    const {todoData} = this.state;
    return (
      <div className={"uk-container site-wrapper"}>
        <AppHeader todo={this.countTodoItems(todoData)}
                   done={this.countDoneItems(todoData)}/>
        <div className="top-panel">
          <SearchPanel
            className={"top-panel__search"}/>
          <ItemStatusFilter/>
        </div>
        <TodoList todos={todoData}
                  onDeleted={this.deleteItem}
                  onMarkedDone={this.onLabelClick}
                  onMarkedImportant={this.onImportantButtonClick}/>
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
};

