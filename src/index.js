import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

//  превращает реакт-элемент в настоящий объект, который можно отобразить на странице
ReactDOM.render(<App />, document.getElementById('root'));
