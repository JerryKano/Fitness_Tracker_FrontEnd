import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { useState } from 'react'; 
import TodoList from './components/todoList'; 

const app = document.getElementById('app'); 

const App = () => {
    const initialTodosData = [
        {
            title: 'Finish laundry',
            complete: false
        }, 
        {
            title: 'Cook dinner',
            complete: true
        }, 
        {
            title: 'Build todo app demo',
            complete: false
        }
    ];

    const [todos, setTodos] = useState(initialTodosData);

    const changeTodoCompletion = (todoIndex) => {
        const changedTodos = todos.map((todo, i) => {
            if (i === todoIndex) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            };

            return todo
        });

        setTodos(changedTodos);
    }

    return (
        <TodoList todos={todos} changeTodoCompletion={changeTodoCompletion}/>
    );
};

ReactDOM.render(<App />, app);