import React from 'react'
import TodosItem from './TodosItem'

const Todos = (props) => {
  return (
    <div>
        {props.todos.map((todo)=>{
            return <TodosItem key={todo.id} todo={todo}/>
        })}
    </div>
  )
}

export default Todos