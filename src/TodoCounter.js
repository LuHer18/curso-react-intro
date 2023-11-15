import { TodoContext } from './TodoContext';
import './TodoCounter.css';
import React from 'react';
function ToDoCounter() {
  const {
    completedTodos,
    totalTodos

  } = React.useContext(TodoContext)
  return (
      <h1 >
        Has completado {completedTodos} de {totalTodos} TODOS
      </h1>
  );
}

export  {ToDoCounter};