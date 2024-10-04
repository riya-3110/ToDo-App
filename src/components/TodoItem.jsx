import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div>
      <div className="container">
        <div className="row my-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger my-btn"
              onClick={() => onDeleteClick(todoName)}
            >
              <RiDeleteBin5Fill style={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
