import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.reverse().map(item => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
