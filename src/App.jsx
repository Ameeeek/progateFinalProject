import React, { useState, createContext } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
export const TodoContext = createContext();
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "belajar react dari progate",
      completed: false,
    },
    {
      id: 2,
      title: "menyelesaikan course dari progate",
      completed: false,
    },
    {
      id: 3,
      title: "evaluasi materi dari course progate",
      completed: false,
    },
  ]);
  const addTodo = (todoTitle) => {
    if (todoTitle === "") {
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };
    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };
  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  
  const deleteTodo = (todoId) => {
    const filtered = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(filtered);
  };
  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div className="text-center p-12">
        <h1 className="text-5xl font-bold">my todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos}/>
      </div>
    </TodoContext.Provider>
  );
};

export default App;
