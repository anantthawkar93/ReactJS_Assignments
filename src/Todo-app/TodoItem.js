import React from "react";
import styles from "./components/TodoItem.module.css"

function TodoItem(props) {
    return (
      
        <li className={styles.item}>
          <input 
            type ="checkbox" 
            checked={props.todo.completed}
            onChange = {()=> props.handleChangeProps(props.todo.id)}
            />
            <button onClick={() => props.deleteTodoProps(props.todo.id)}>Delete</button>
            <i>{props.todo.title}</i>
        </li>
    );
}
export default TodoItem;
