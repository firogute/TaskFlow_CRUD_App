import "./App.css";
import React, { Fragment } from "react";

// Components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div class="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
