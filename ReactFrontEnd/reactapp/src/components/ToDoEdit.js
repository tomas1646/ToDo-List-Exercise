import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const urlTODO = 'http://localhost:8080/todo';

function ToDoEdit() {
  const [input, setInput] = useState('');

  const { titulo, idfolder, description, idtodo } = useParams();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const editTodo = () => {
    if (input == '') return;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(urlTODO + '/' + idtodo + '/description/' + input, options);

    alert('name changed to ' + input);
  };

  return (
    <>
      <h3>Editing Task "{description}"</h3>
      <br />
      <input
        type='text'
        value={input}
        className='form-control'
        placeholder={description}
        onChange={handleChange}
        autoComplete='off'
      />
      <br />
      <Link to={'/todo/' + titulo + '/' + idfolder}>
        <button
          className='btn btn-secondary editTodoBtn'
          style={{ width: '35%' }}
          onClick={editTodo}
        >
          Save
        </button>
      </Link>
      <Link to={'/todo/' + titulo + '/' + idfolder}>
        <button
          className='btn btn-secondary btnEdit editTodoBtn'
          style={{ width: '35%' }}
        >
          Cancel
        </button>
      </Link>
    </>
  );
}

export default ToDoEdit;
