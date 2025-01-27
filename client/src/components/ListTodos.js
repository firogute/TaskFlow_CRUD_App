import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [Todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(Todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      // console.log(data);

      setTodos(data);
      // console.log(Todos);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Start</th>
            <th>End</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Todos.map((todo) => {
            console.log(todo);
            const formatter = (date, time) => {
              const startDate = new Date(date).toISOString().split("T")[0];
              const starttime = time;
              const formattedTime = new Date(
                `${startDate}T${starttime}`
              ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
              return formattedTime;
            };
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <div className="d-flex flex-column">
                    <span>{new Date(todo.startdate).toLocaleDateString()}</span>
                    <span>{formatter(todo.startdate, todo.starttime)}</span>
                  </div>
                </td>
                <td>
                  <div className="d-flex flex-column">
                    <span>{new Date(todo.enddate).toLocaleDateString()}</span>
                    <span>{formatter(todo.enddate, todo.endtime)}</span>
                  </div>
                </td>

                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  {todo.iscompleted ? (
                    <span className="badge bg-success">Completed</span>
                  ) : (
                    <span className="badge bg-warning">Pending</span>
                  )}
                </td>
              </tr>
            );
          })}
          {/*<tr>
            <td>John</td> 
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>*/}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
