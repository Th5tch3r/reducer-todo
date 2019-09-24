import React from 'react';

const Todo = ({ task, id, completed, toggledCompleted}) => {
    return (
        <div className={'todo' + (completed ? 'completed' : '')}
            onClick = {() => toggledCompleted(id)}
        >
            {task}
        </div>
    )
}

export default Todo;