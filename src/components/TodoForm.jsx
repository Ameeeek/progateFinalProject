import React, {useState} from "react";

const TodoForm = (props) => {
  const [title, setTitle] = useState('')
 
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo(title)
    setTitle('')
  };
  const handleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTitle(newTodoTitle)
  };
  return (
    <div className="mb-10 mt-4">
      <form onSubmit={(event)=>{
        handleSubmit(event)
      }}>
        <input placeholder="tambahkan todo" className="input input-primary input-bordered w-full max-w-xs" onChange={(event)=>{handleChange(event)}} type="text"></input>
        <button type="submit" className="btn btn-primary">add</button>
      </form>
    </div>
  );
};

export default TodoForm;
