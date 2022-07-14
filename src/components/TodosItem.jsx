import React, {useContext} from "react";
import { TodoContext } from "../App";
const TodosItem = (props) => {
  const {toggleCompleted, deleteTodo} = useContext(TodoContext)
  let strike = "";
  if (props.todo.completed) {
    strike = "line-through";
  } else {
    strike = "none";
  }
  const style = {
    fontSize: "24px",
    textDecoration: strike,
    flexGrow: '2'
  };
  const wrapperStyle = {
    display:'flex',
    alignItems: 'center',
    padding: '12px',
    fontSize: '24px'
  }
  const buttonStyle = {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    cursor: 'pointer',
    fontSize: '16px'
  }
  return (
    <div style={wrapperStyle}>
      <input type="checkbox" onChange={()=>toggleCompleted(props.todo.id)}></input>
      <p style={style}>{props.todo.title}</p>
      <button style={buttonStyle} onClick={()=>deleteTodo(props.todo.id)}>x</button>
    </div>
  );
};

export default TodosItem;
