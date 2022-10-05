import React, { Fragment, useState } from "react";
import "../css/styles.css";

const InputTodo = () => {
  // usetate -> every time we gonna use usetate, we should first specify ur actual state (in this ex. is description) and we have to set something called set (in this ex. is setDescription).
  // and the only way to change the state is by using the set (in this ex. is setDescription)
  const [description, setDescription] = useState("");
  // console.log(description);
  // console to see change in inspect console
  function refreshPage() {
    window.location.reload(false);
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    // e.preventDefault(); is to prevent refresh
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, //this is telling us, we gonna have json data
        body: JSON.stringify(body), //we should stringyfy the json
      });
      // console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center m-5 primary text-white">Input Todo</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add TODO"
          className="form-control m-5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          // onchange (e ) whatever we write its gonna focus on the value on what we put in the input, it s gonna target that and its going to get the value
        />
        <div>
          <button onClick={refreshPage} className="btn btn-success m-5 ">
            Add
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default InputTodo;
