import React, { useState } from 'react';

export function Todolist(){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [editingIndex, setEditingIndex] = useState(-1);
    const [editedTodo, setEditedTodo] = useState('');

    const addTodo = () => {
      if (newTodo.trim() === '') return;
      setTodos([...todos, { text: newTodo, isEditing: false }]);
      setNewTodo('');
    };

    const deleteTodo = (index) => {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    };

    const toggleEdit = (index) => {
      setEditingIndex(index);
      setEditedTodo(todos[index].text);
    };

    const saveEdit = (index) => {
      const updatedTodos = [...todos];
      updatedTodos[index].text = editedTodo;
      updatedTodos[index].isEditing = false;
      setTodos(updatedTodos);
      setEditingIndex(-1);
      setEditedTodo('');
    };

    const filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>

        <input
          type="text"
          placeholder="Search todos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ul>
          {filteredTodos.map((todo, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                  />
                  <button onClick={() => saveEdit(index)}>Save</button>
                </>
              ) : (
                <>
                  {todo.text}
                  <button onClick={() => toggleEdit(index)}>Edit</button>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };


