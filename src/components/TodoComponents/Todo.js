import React from 'react';

const Todo = props => {
    return (
        <>
       {`item${props.item.completed ? 'completed' : ''}`}
        onclick = {() => props.toggleItem(props.item.id)}
        <p>{props.item.name}</p>
        </>
    )
}

export default Todo;