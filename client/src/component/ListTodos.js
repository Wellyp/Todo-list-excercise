import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
  // useEffect run anytime component rendered. its keeps running. its gonna make multiple request, so ensuring only that we only make one request and going to add bracket []
  const [todos, setTodos] = useState([]);
  //delete todo funtion
  async function deleteTodo(id) {
    try {
      //now we use template engine for id {$id} => it allows us to add variable inside our string. and we gonna use `` instead of ""
      // we put id as an argument
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE", //again, we specify method, in this case is delete
      });
      // console.log(res); cek
      // we gonna use filter to automatically take it out
      setTodos(todos.filter((todo) => todo.todo_id !== id)); // this check id that we trying to get rid of and its going to compoare it with the other todos. and if its not equal its gonna be deleted
    } catch (err) {
      console.error(err.message);
    }
  }
  async function getTodos() {
    const res = await fetch("http://localhost:5000/todos");

    const todoArray = await res.json();

    setTodos(todoArray);
  }

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return (
    <Fragment>
      <table class="table mt-5 ">
        <thead>
          <tr>
            <th class="text-center primary text-white" bg-light text-dark>
              Description
            </th>
            <th class="text-center primary text-white">Edit</th>
            <th class="text-center primary text-white">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map((todo) => (
            <tr className="text-center primary text-white" key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />{" "}
                {/*put todo and pass it as a prop (we gonna pass this inside our component*/}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
export default ListTodo;
