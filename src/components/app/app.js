import React from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TODO_DATA from "./mocked-data";

import './app.css';

const App = () => {

  return (
    <div className={"uk-container site-wrapper"}>
      <AppHeader />
      <div className="top-panel">
        <SearchPanel className={"top-panel__search"}/>
        <ItemStatusFilter />
      </div>
      <TodoList todos={TODO_DATA}/>
    </div>
  );
};

export default App;
