import React from 'react';
import './createtodobutton.css'
import add from './img/add.png'
import { TodoContext } from '../TodoContext';
function CreateToDoButton() {
  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
    return (
      <button className='create-todo-button' onClick={() => {
        setOpenModal(!openModal)
      }}><img src={add} /></button>
    );
  }

  export  {CreateToDoButton}