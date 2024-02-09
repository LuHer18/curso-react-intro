import React from 'react';
import {TodoIcon} from './TodoIcon';

function EditIcon({onEdit}) {
    return (
        <TodoIcon
            type = 'edit'
            color = 'gray'
            onClick={onEdit}
        />
    );
}

export  {EditIcon}