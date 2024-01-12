import { useTodos } from './UseTodos';
import React from 'react';
import { ToDoCounter } from './TodoCounter';
import { ToDoSearch } from './TodoSearch';
import { ToDoList } from './TodoList';
import { ToDoItem } from './TodoItem';
import { CreateToDoButton } from './CreateTodoButton';
import { TodosLoading } from './TodosLoading';
import { TodosError } from './TodosError';
import { TodosEmpy } from './TodosEmpty';
import { Modal } from './Modal'
import { TodoForm } from './TodoForm'
import { TodoHeader } from './TodoHeader';



function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    
  } = useTodos()



  return (
    <React.Fragment>
      <TodoHeader>
        <ToDoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

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


      <CreateToDoButton openModal={openModal} setOpenModal={setOpenModal}>

      </CreateToDoButton>
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </React.Fragment>
  )
}


export default App;
