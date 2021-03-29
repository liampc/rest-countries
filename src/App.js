import './App.scss';
import React, {useState, useEffect} from 'react'
import Header from './layout/header/Header'
import Main from './layout/main/Main'
import Page from './layout/page/Page'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const switchToDark = () => {

    setDarkMode(!darkMode)
  
    let elems = document.querySelectorAll('.to-switch')
    let mode = document.querySelector('#mode')
    elems.forEach(el => {
      if (darkMode == true){
        el.classList.add('dark')
        mode.innerHTML = 'Light'
      }
      else {
        el.classList.remove('dark')
        mode.innerHTML = 'Dark'
      }
    })
    

  }



  return (
    <div className="App">
      <Header handleClick={switchToDark} />
      <Main />
      <Page />
    </div>
  );
}

export default App;
