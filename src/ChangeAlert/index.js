import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeAlert ({sincornizeTodos}) {
    const {show, toggleShow} = useStorageListener(sincornizeTodos);
    if (show){
     return (
        <div className="ChangeAlert-bg">
            <div className="ChangeAlert-container">
                <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador</p>
                <p>¿Quieres Sincronizar tus TODOs? </p>

                <button
                    className="Todo-Form-button TodoForm-button--ad"
                    onClick={toggleShow}
                >
                    Yes!
                </button>
            </div>
        </div>
     )
    } else {
        return null
    }
}

export {ChangeAlert}