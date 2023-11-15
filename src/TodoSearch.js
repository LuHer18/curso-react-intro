import React from 'react';
import './TodoSearch.css'
import { TodoContext } from './TodoContext';
function ToDoSearch() {
  const {
    searchValue, 
    setSearchValue

  } = React.useContext(TodoContext)
  
  return (
    <div className='nav-search'>
      <input className="todo-search" placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
      />
    </div> 
  );
}

export { ToDoSearch }