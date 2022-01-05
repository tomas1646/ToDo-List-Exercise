import React from 'react';
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
          View Items
        </Link>
      </div>
      <div className='col-2'>
        <p className='cursor' onClick={() => removeFolder(folder.id)}>
          Remove
        </p>
      </div>
    </div>
  );
};

export default Folder;
