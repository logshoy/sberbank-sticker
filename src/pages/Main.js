import React from 'react';
import TodoCreate from '../TodoCreate';
import TodoList from '../TodoList';
import DeletePostModal from '../components/DeletePostModal.js';

function Main() {
  return (
    <div className="container">
      <TodoCreate />
      <TodoList />
      <DeletePostModal />
    </div>
  );
}

export default Main;
