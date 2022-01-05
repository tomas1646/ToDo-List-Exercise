import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const urlTODO = 'http://localhost:8080/todo';

function ToDo({ todo, folderTitulo, folderId }) {
  const [edit, setEdit] = useState(todo.isCompleted == 1);

  //Edit ToDo Checkbox
  const handleChange = (e) => {
    setEdit(e.target.checked);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let isCompleted;

    if (e.target.checked) {
      isCompleted = 1;
    } else {
      isCompleted = 0;
    }

    fetch(urlTODO + '/' + todo.id + '/isComplete/' + isCompleted, options);
  };

  return (
    <>
      <div className='row'>
        <div className='col-1'>
          <input
            type='checkbox'
            checked={edit}
            className='form-check-input'
            onChange={handleChange}
          />
        </div>
        <div className='col-9'>{todo.description}</div>
        <div className='col-2'>
          <p className='cursor'>
            <Link
              className='linkFolder'
              to={
                '/todo/' +
                folderTitulo +
                '/' +
                folderId +
                '/' +
                todo.description +
                '/' +
                todo.id
              }
            >
              Edit
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default ToDo;
