import React, { useState, useEffect } from 'react';

import Folder from './Folder';
import FolderForm from './FolderForm';

const urlFOLDER = 'http://localhost:8080/folder';

const FolderList = () => {
  const [folders, setFolders] = useState([]);

  //Get Data from DataBase
  useEffect(() => {
    fetch(urlFOLDER)
      .then((res) => res.json())
      .then((folders) => {
        setFolders(folders);
      })
      .catch((err) => console.log(err));
  }, []);

  const addFolder = (folder) => {
    const newFolder = [...folders, folder];

    setFolders(newFolder);
  };

  const removeFolder = (id) => {
    const removeFold = [...folders].filter((folder) => folder.id != id);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(urlFOLDER + '/' + id, options);

    setFolders(removeFold);
  };

  return (
    <>
      <h3>Folders</h3>
      {folders.map((folder) => {
        return (
          <Folder key={folder.id} removeFolder={removeFolder} folder={folder} />
        );
      })}
      <br />
      <FolderForm onSubmit={addFolder} />
    </>
  );
};

export default FolderList;
