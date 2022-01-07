import React, { useState } from 'react';

const urlTODO = 'http://localhost:8080/todo';

function ToDoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //Add ToDo Function
  const newTodo = (e) => {
    e.preventDefault();

    if (input == '') return;

    //Save ToDo in DataBase
    const todoCreated = {
      description: input,
      isCompleted: 0,
      folderId: props.folderId,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoCreated),
    };

    fetch(urlTODO, options)
      .then((res) => res.json())
      .then((todoRes) => {
        props.onSubmit(todoRes);
      })
      .catch((err) => console.log(err));

    setInput('');
  };

  return (
    <form className='input-group' onSubmit={newTodo}>
      <input
        type='text'
        value={input}
        className='form-control'
        placeholder='New Task'
        onChange={handleChange}
        autoComplete='off'
      />
      <button className='btn btn-secondary'>Add</button>
    </form>
  );
}

export default ToDoForm;
