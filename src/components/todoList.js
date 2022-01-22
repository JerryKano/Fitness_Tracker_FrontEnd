import React from 'react'; 
import TodoCard from './todoCard';

const TodoList = (props) => {
    const todos = props.todos; 
    const changeTodoCompletion = props.changeTodoCompletion; 
    return (
        <div>
            <h1>Welcome to your Todo App</h1> 

            <h3>My Todos: </h3>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'yellow'
            }}>
                {
                    todos.map((todo, i) => {
                        return <TodoCard key={todo.title} todo={todo} changeTodoCompletion={ () => changeTodoCompletion(i)}/>
                    })
                }
            </div>
        </div>
    )
}

export default TodoList; 