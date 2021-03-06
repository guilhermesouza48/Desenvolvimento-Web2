import React from 'react';
import './App.css';

import Header from '../Header/Header.jsx';
import Titulo from '../Titulo/Titulo.jsx';
import Inicio from '../Inicio/Inicio.jsx';

import { Route, Switch } from 'react-router';

function App() {
  return (
    <div>

      <Header />

      <Titulo />

      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>}></Route>
        </Switch>
      </main>

    </div>
  );
}

export default App;