import React from 'react';
import './TodoSearch.css'
function ToDoSearch({searchValue, 
  setSearchValue, loading}) {
  
  return (
    <div className='nav-search'>
      <input 
        className="todo-search" placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
        disabled = {loading}
      />
    </div> 
  );
}

export { ToDoSearch }