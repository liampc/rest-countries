import './App.scss';
import React, {useState} from 'react'
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layout/header/Header'
import Main from './layout/main/Main'
import Page from './layout/page/Page'

function App() {

  const [darkMode, setDarkMode] = useState()

    const switchToDark = () => {


    let elems = document.querySelectorAll('.to-switch')
    let mode = document.querySelector('#mode')

    elems.forEach(el => {
      if (el.classList.contains('dark')){
        setDarkMode(false)
        el.classList.remove('dark')
        mode.innerHTML = 'Dark'
      } else {
        setDarkMode(true)
        el.classList.add('dark')
        mode.innerHTML = 'Light'

      }
    })
    
  }


  return (
    <Router basename='/'>
      <div className="App">
        <Header switchToDark={switchToDark} />
        <Route>
          <Switch>
            <Route exact path="/" render={(props) => <Main {...props} darkMode={darkMode} /> }/>
            <Route path="/:id" render={(props) => <Page {...props} darkMode={darkMode} />} />
          </Switch>
        </Route>
      </div>
    </Router>
  );
}

export default App;
