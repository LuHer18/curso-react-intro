import React from "react";


/* localStorage.removeItem('TODOS_V1');
const defaultTodos = [
  {text: 'Cortar cebolla', completed: true },
  {text: 'Tomar el curso de React JS', completed: false },
  {text: 'Llorar con la llorona', completed: false },
  {text: 'LALALA', completed: false },
]; 

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */


function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sincronized, setSincronized] = React.useState(true)


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          
        }
        setItem(parsedItem)
        setLoading(false);
        setSincronized(true)
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [sincronized]);


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  }
  const sincronize = ()=> {
    setLoading(true);
    setSincronized(false);
  }

  return { item, saveItem, loading, error, sincronize }
}




function useTodos(){
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error,
        sincronize: sincornizeTodos
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
           
      const searchedTodos = todos.filter(todo => {
       return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      })

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({text, completed: false,})
        saveTodos(newTodos);
      }  
      
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex =newTodos.findIndex(todo => {
          return todo.text === text
        })
    
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    
      }
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
    
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      
      }

    return {
            loading,
            error,
            completedTodos,
            totalTodos,
            searchedTodos,
            searchValue,
            completeTodo,
            deleteTodo,
            setSearchValue,
            openModal, 
            setOpenModal,
            addTodo,
            sincornizeTodos
    }
    
}


export  {useTodos};