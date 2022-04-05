import React from 'react';

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo}) => {
    return (
        <li>
            <label
                style={{textDecoration: todo.complete ? 'line-through' : undefined}}
            >
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onClick={() => {
                        toggleTodo(todo);
                    }}
                />{' '}
                {todo.text}
            </label>
        </li>
    );
};