import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, removeTodo, toggleTodoComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodoComplete={toggleTodoComplete}
        />
      ))}
    </ul>
  );
};
