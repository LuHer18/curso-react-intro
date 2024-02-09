import React from "react";
import { useState } from "react";

function useStorageListener(sincornizeTodos) {
    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log("Hubo Cambios en TODOV1")
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        sincornizeTodos()
        setStorageChange(false)
    }
    return {
        show:storageChange,
        toggleShow,
    };
}


export { useStorageListener }