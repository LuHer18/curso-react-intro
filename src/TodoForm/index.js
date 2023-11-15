import React from "react";
import './Todoform.css'
import { TodoContext } from "../TodoContext";


function TodoForm() {
    const {
        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    function onSubmit(event) {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    function onCancel() {
        setOpenModal(false);
    }

    function onChange(event) {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="Todoform-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick= {onCancel }
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Agregar</button>
            </div>
        </form>
    )
}

export { TodoForm }