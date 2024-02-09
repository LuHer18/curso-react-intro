import React from 'react';
import './createtodobutton.css'
import add from './img/add.png'
function CreateToDoButton(props) {
    return (
      <button className='create-todo-button' onClick={props.onClick}><img src={add} /></button>
    );
  }

  export  {CreateToDoButton}