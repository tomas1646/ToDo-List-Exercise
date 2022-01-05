import React from 'react';
import FolderList from './components/FolderList';
import ToDoList from './components/ToDoList';
import ToDoEdit from './components/ToDoEdit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={FolderList} />
        <Route exact path='/todo/:titulo/:idfolder' component={ToDoList} />
        <Route
          exact
          path='/todo/:titulo/:idfolder/:description/:idtodo'
          component={ToDoEdit}
        />
      </Switch>
    </Router>
  );
}

export default App;
