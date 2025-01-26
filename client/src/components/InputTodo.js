import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-CA");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(formattedDate);
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [endDate, setEndDate] = useState(formattedDate);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description, startDate, startTime, endDate, endTime };
      console.log(body);
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Classic Todo List</h1>
      <form className="mt-5" onSubmit={onSubmitForm}>
        <table className="table">
          <tbody>
            <tr>
              <th>Task</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </td>
              <td>
                <div className="d-flex flex-column">
                  <input
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <input
                    type="time"
                    className="form-control"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
              </td>
              <td>
                <div className="d-flex flex-column">
                  <input
                    type="date"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <input
                    type="time"
                    className="form-control"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="btn btn-success text-center"
          style={{ width: `200px`, display: `block`, margin: `0 auto` }}
        >
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
