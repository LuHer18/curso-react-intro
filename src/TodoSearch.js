import React from 'react';
import './TodoSearch.css'
function ToDoSearch({searchValue, 
  setSearchValue}) {
  
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