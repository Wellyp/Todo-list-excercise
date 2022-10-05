import React, { Fragment } from "react";
// import logo from "./logo.svg";
import "./App.css";
import InputTodo from "./component/InputTodo";
import ListTodo from "./component/ListTodos";
import "./css/styles.css";
// const bgPic = new URL("./images/003.jpg", import.meta.url);

function App() {
  return (
    <>
      <Fragment>
        <div className="main-container">
          <InputTodo />
          <ListTodo />
        </div>
      </Fragment>
    </>
  );
}

export default App;
