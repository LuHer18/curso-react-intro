import React from "react";
import './Todoform.css'
import { useNavigate } from "react-router-dom";

function TodoForm({
    submitEvent, label, submitText, defaultTodoText 
}) {
    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] = React.useState(defaultTodoText || '');
    function onSubmit(event) {
        event.preventDefault();
        submitEvent(newTodoValue);
        navigate('/')
    }
 
    function onCancel() {
        navigate('/')
    }

    function onChange(event) {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>{label}</label>
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
                >{submitText}</button>
            </div>
        </form>
    )
}

export { TodoForm }