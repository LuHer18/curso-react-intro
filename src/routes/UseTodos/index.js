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
  const initialState = {
    item: initialValue,
    error: false,
    loading: true,
    sincronized: true,
  }
  
  const [state, dispach] = React.useReducer(reducer, initialState)
  const {
    item,
    loading,
    error,
    sincronized} = state;

/*   const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sincronized, setSincronized] = React.useState(true) */

  //ACTION CREATORS
  const onError = (error) => dispach({
    type: actionTypes.error, 
    payload: error
  })
  const onSuccess = (parsedItem) => dispach({
    type: actionTypes.success, 
    payload: parsedItem,
  })
  const onSave = (newItem) => dispach({
    type: actionTypes.save,
    payload: newItem,
  })
  const onSincronize = () => dispach({
    type: actionTypes.sincronize,
  })

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
        onSuccess(parsedItem)
        /* setItem(parsedItem)
        setLoading(false);
        setSincronized(true) */
      } catch (error) {
        onError(error);
        //setError(true)
      }
    }, 1000);
  }, [sincronized]);


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    onSave(newItem);
    //setItem(newItem);
  }
  const sincronize = ()=> {
    onSincronize();
/*     setLoading(true);
    setSincronized(false); */
  }

  return { item, saveItem, loading, error, sincronize }
}

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state, 
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    item: payload,
    loading: false,
    error:false,
    sincronized: true,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading:true,
    sincronized: false,
    error: false,
  }
});

const reducer = (state, action)=> {
/*   if(reducerObject(state)[action.type]){
    return reducerObject(state, action.payload)[action.type]
} else {
    return state;
} */
  return reducerObject(state, action.payload)[action.type] || state;
}



function useTodos(){
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error,
        sincronize: sincornizeTodos
      } = useLocalStorage('TODOS_V2', []);
      const [searchValue, setSearchValue] = React.useState('');

    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
           
      const searchedTodos = todos.filter(todo => {
       return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      })

      const addTodo = (text) => {
        const  id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push({text, completed: false, id})
        saveTodos(newTodos);
      } 
      const getTodo = (id)=> {
        const todoIndex = todos.findIndex(todo => todo.id ===id)
        return todos[todoIndex]
      }

      const editTodo = (id, newText)=> {
        const edit = [...todos];
        const todoIndex = edit.findIndex(todo => todo.id ===id)
        edit[todoIndex].text = newText;
        saveTodos(edit)
      }
      
    
      const completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => {
          return todo.id === id
        })
    
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    
      }
    
      const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.id === id
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
            addTodo,
            sincornizeTodos,
            editTodo,
            getTodo
    }
    
}

function newTodoId(todoList){
  if (!todoList.length){
    return 1;
  }else {
    const idList = todoList.map(todo => todo.id);
    const idMax = Math.max(...idList);
    return idMax + 1;
  }
}

export  {useTodos};