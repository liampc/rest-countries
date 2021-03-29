import './App.scss';
import React, {useState, useEffect} from 'react'
import Header from './layout/header/Header'
import Main from './layout/main/Main'
import Page from './layout/page/Page'

function App() {


  return (
    <div className="App">
      <Header />
      <Main />
      <Page />
    </div>
  );
}

export default App;
