import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

export const TodoAdd = ({ newItem }) => {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddButtonClicked = () => {
    newItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success my-btn"
            onClick={handleAddButtonClicked}
          >
            <MdAdd style={{ fontSize: "25px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};
