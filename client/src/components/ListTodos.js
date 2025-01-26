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
            <th>Start Date</th>
            <th>Start Time</th>
            <th>End Date</th>
            <th>End Time</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Todos.map((todo) => {
            const startDate = (new Date(todo.startdate)).toISOString().split("T")[0];
            const starttime = todo.starttime;
            console.log(startDate,starttime);
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>{new Date(todo.startdate).toLocaleDateString()}</td>
                <td>{todo.starttime}</td>
                <td>{new Date(todo.enddate).toLocaleDateString()}</td>
                <td>{new Date(todo.endtime).toLocaleTimeString()}</td>
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
