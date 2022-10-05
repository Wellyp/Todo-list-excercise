import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  // console.log(todo);

  //editText function
  const editText = async (id) => {
    try {
      const body = { description };

      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      // console.log(res);
      // use window.location = "/" so we dont need to refresh
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  const [description, setDescription] = useState(todo.description);
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`} //this is to make specific from below button -> id = "id21" and the purpose is to set id different from another
      >
        Edit
      </button>
      {/*id = "id21" */}
      <div
        class="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)} //this is set to default  when we edit the text and dont click edit yet. so the text remain default
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit todo</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)} //this is set to default  when we edit the text and dont click edit yet. so the text remain default
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)} //whenever we change the value within this input of the edit button, it is going to edit the information by refreshing
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText(todo.todo_id)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)} //this is set to default  when we edit the text and dont click edit yet. so the text remain default
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
