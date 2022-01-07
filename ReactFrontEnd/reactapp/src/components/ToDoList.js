import React, { useState, useEffect } from 'react';

import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

import { Link, useParams } from 'react-router-dom';

const urlTODO = 'http://localhost:8080/todo';

function ToDoList() {
  const { titulo, idfolder } = useParams();

  const folderId = idfolder;
  const folderTitulo = titulo;

  const [todos, setTodos] = useState([]);

  //Get Data from DataBase
  useEffect(() => {
    fetch(urlTODO + '/' + folderId)
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
      })
      .catch((err) => console.log(err));
  }, []);

  const addTodo = (todo) => {
    const newTodo = [...todos, todo];

    setTodos(newTodo);
  };

  const removeTodo = (id) => {
    const remove_Todo = [...todos].filter((todo) => todo.id != id);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(urlTODO + '/' + id, options);

    setTodos(remove_Todo);
  };

  return (
    <>
      <Link className='linkTodo' to='/'>
        <h3>Folders &gt; {folderTitulo}</h3>
      </Link>
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            folderTitulo={folderTitulo}
            folderId={folderId}
            removeTodo={removeTodo}
          />
        );
      })}
      <br />
      <ToDoForm onSubmit={addTodo} folderId={folderId} />
      <br />
    </>
  );
}

export default ToDoList;
