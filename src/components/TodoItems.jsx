import { TodoItem } from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoList, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoList.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};
export default TodoItems;
