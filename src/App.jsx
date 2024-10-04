import "./App.css";
import React, { useState } from "react";
import { TodoAdd } from "./components/TodoAdd";
import TodoItems from "./components/TodoItems";
import { TodoName } from "./components/TodoName";
import { WelcomeMessage } from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New added item : ${itemName} and Date : ${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];

    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    // console.log(`Item deleted :: ${todoItemName}`);

    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <TodoName />
      <TodoAdd newItem={handleNewItem} />
      {todoItems.length === 0 || todoItems.name === "" ? (
        <WelcomeMessage />
      ) : (
        ""
      )}
      <TodoItems todoList={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
