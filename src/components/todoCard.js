import React from 'react';

const TodoCard = (props) => {
    console.log('This is the todoCard props', props)
    const { title, complete } = props.todo;
    const changeTodoCompletion = props.changeTodoCompletion; 

    return (
        <div>
            <h3>{title}</h3>

            <label>
                Complete
                <input type="checkbox" value={complete} checked={complete} onChange={() => changeTodoCompletion()}></input>
            </label>
        </div>
    )
}

export default TodoCard; 