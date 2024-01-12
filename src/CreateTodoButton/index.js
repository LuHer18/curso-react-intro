import React from 'react';
import './createtodobutton.css'
import add from './img/add.png'
function CreateToDoButton({
  openModal,
  setOpenModal
}) {
    return (
      <button className='create-todo-button' onClick={() => {
        setOpenModal(!openModal)
      }}><img src={add} /></button>
    );
  }

  export  {CreateToDoButton}