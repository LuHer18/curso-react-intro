import { CompleteIcon } from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';
import { EditIcon } from './EditIcon';
import './TodoItem.css';


function ToDoItem({info, completed, onComplete, onDelete, onEdit}) {
    return (
      <li className='TodoItem'>
        <CompleteIcon completed = {completed}
          onComplete = {onComplete}/>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete" }`}>{info}</p>
        <EditIcon onEdit={onEdit}/>
        <DeleteIcon
          onDelete = {onDelete}
        />
      </li>
    );
  }

  export {ToDoItem}