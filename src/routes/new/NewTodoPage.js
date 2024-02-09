import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../UseTodos";

function NewTodoPage() {
    const {addTodo} = useTodos()
    return(
        <TodoForm 
            label="Escribe tu nuevo TODO"
            submitText='Añadir'
            submitEvent={addTodo}
        
        />
    );
}

export {NewTodoPage};