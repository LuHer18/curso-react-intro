import { ToDoCounter } from './TodoCounter';
import { ToDoSearch } from './TodoSearch';
import { ToDoList } from './TodoList';
import { ToDoItem } from './TodoItem';
import { CreateToDoButton } from './CreateTodoButton';
import { TodosLoading } from './TodosLoading';
import { TodosError } from './TodosError';
import { TodosEmpy } from './TodosEmpty';
import React from 'react';
import { TodoContext } from './TodoContext';
import {Modal} from './Modal'
import {TodoForm} from './TodoForm'

function AppUi() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )
        }
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <TodosEmpy />}

        {searchedTodos.map(todo => (
          <ToDoItem
            info={todo.text}
            key={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </ToDoList>


      <CreateToDoButton/>
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUi };