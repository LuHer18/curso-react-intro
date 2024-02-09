import './TodoCounter.css';
import React from 'react';
function ToDoCounter({completedTodos,
  totalTodos, loading}) {
  return (
      <h1 className={`todoCounter ${!!loading && 'todoCounter--loading'}`} >
        Has completado {completedTodos} de {totalTodos} TODOS
      </h1>
  );
}

export  {ToDoCounter};