import './TodoCounter.css';
import React from 'react';
function ToDoCounter({completedTodos,
  totalTodos}) {
  return (
      <h1 >
        Has completado {completedTodos} de {totalTodos} TODOS
      </h1>
  );
}

export  {ToDoCounter};