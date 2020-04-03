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

  render() {
    return (
      <div className={"uk-container site-wrapper"}>
        <AppHeader/>
        <div className="top-panel">
          <SearchPanel className={"top-panel__search"}/>
          <ItemStatusFilter/>
        </div>
        <TodoList todos={this.state.todoData}
                  onDeleted={this.deleteItem}/>
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
};

