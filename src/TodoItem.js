import { CompleteIcon } from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';
import './TodoItem.css';


function ToDoItem({info, completed, onComplete, onDelete}) {
    return (
      <li className='TodoItem'>
        <CompleteIcon completed = {completed}
          onComplete = {onComplete}/>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete" }`}>{info}</p>
        
        <DeleteIcon
          onDelete = {onDelete}
        />
      </li>
    );
  }

  export {ToDoItem}