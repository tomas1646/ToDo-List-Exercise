import React, { useState } from 'react';

const urlFOLDER = 'http://localhost:8080/folder';

function FolderForm(props) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //Add Folder
  const newFolder = (e) => {
    e.preventDefault();

    if (input == '') return;

    //Save Folder in DataBase
    const folderCreated = {
      nombre: input,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(folderCreated),
    };

    fetch(urlFOLDER, options)
      .then((res) => res.json())
      .then((folderRes) => {
        props.onSubmit(folderRes);
      })
      .catch((err) => console.log(err));

    setInput('');
  };

  return (
    <form className='input-group' onSubmit={newFolder}>
      <input
        type='text'
        value={input}
        className='form-control'
        placeholder='New Folder'
        onChange={handleChange}
        autoComplete='off'
      />
      <button className='btn btn-secondary'>Add</button>
    </form>
  );
}

export default FolderForm;
