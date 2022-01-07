import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { IoListSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Folder = ({ removeFolder, folder }) => {
  return (
    <div className='row'>
      <div className='col-6'>- {folder.nombre}</div>
      <div className='col-4'>
        <Link
          className='linkFolder'
          to={'/todo/' + folder.nombre + '/' + folder.id}
        >
          <IoListSharp />
        </Link>
      </div>
      <div className='col-2'>
        <p className='cursor' onClick={() => removeFolder(folder.id)}>
          <AiFillDelete />
        </p>
      </div>
    </div>
  );
};

export default Folder;
