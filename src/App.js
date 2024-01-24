import { useTodos } from './UseTodos';
import React from 'react';
import { ToDoCounter } from './TodoCounter';
import { ToDoSearch } from './TodoSearch';
import { ToDoList } from './TodoList';
import { ToDoItem } from './TodoItem';
import { CreateToDoButton } from './CreateTodoButton';
import { TodosLoading } from './TodosLoading';
import { TodosError } from './TodosError';
import { TodosEmpty } from './TodosEmpty';
import { Modal } from './Modal'
import { TodoForm } from './TodoForm'
import { TodoHeader } from './TodoHeader';
import { ChangeAlert } from './ChangeAlert';



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
    sincornizeTodos
    
  } = useTodos()



  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <ToDoCounter totalTodos={totalTodos} completedTodos={completedTodos}  />
        <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <ToDoList
        error = {error}
        loading = {loading}
        searchedTodos = {searchedTodos}
        searchText = {searchValue}
        totalTodos = {totalTodos}
        onError = {()=> <TodosError />}
        
        onLoading = {()=> <TodosLoading />}
        onEmptyTodos = {()=> <TodosEmpty />}
        onEmptySearchResults = {
          (searchText)=> <p>No hay resultados para  {searchText}</p>
        }
        /* render = {todo => (
          <ToDoItem
            info={todo.text}
            key={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */
      >
      {todo => (
          <ToDoItem
            info={todo.text}
            key={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </ToDoList>

{/*       <ToDoList>
        {{loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )
        }
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <TodosEmpty />}

        {searchedTodos.map(todo => (
          <ToDoItem
            info={todo.text}
            key={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}}
      </ToDoList> */}


      <CreateToDoButton openModal={openModal} setOpenModal={setOpenModal}>

      </CreateToDoButton>
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <ChangeAlert sincornizeTodos={sincornizeTodos}/> 
    </React.Fragment>
  )
}


export default App;
