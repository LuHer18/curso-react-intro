import { useTodos } from '../UseTodos';
import React from 'react';
import { ToDoCounter } from '../../ui/TodoCounter';
import { ToDoSearch } from '../../ui/TodoSearch';
import { ToDoList } from '../../ui/TodoList';
import { ToDoItem } from '../../ui/TodoItem';
import { CreateToDoButton } from '../../CreateTodoButton';
import { TodosLoading } from '../../ui/TodosLoading';
import { TodosError } from '../../ui/TodosError';
import { TodosEmpty } from '../../ui/TodosEmpty';

import { TodoHeader } from '../../ui/TodoHeader';
import { ChangeAlert } from '../../ui/ChangeAlert';
import { useNavigate } from 'react-router-dom';




function HomePage() {
  const navigate = useNavigate();

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    //openModal,
    //setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    //addTodo,
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
            key={todo.id}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={()=> {
              navigate(`/edit/${todo.id}`, {state: {todo: todo}})
            }}
          />
        )}
      </ToDoList>

      <CreateToDoButton
        onClick={()=> navigate('/new')}
      /* openModal={openModal} setOpenModal={setOpenModal} */>

      </CreateToDoButton>
      {/* {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}
      <ChangeAlert sincornizeTodos={sincornizeTodos}/> 
    </React.Fragment>
  )
}


export default HomePage;