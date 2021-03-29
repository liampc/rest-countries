import React, {useState} from 'react'
import './_header.scss'



const Header = () => {

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
        <header className="header to-switch">
            <div className="header__banner container">
                <h1 className="header__logo">Where in the world?</h1>
                <p className="header__switch to-switch" onClick={switchToDark}>
                    {/* <i><ion-icon name="moon-outline"></ion-icon></i> */}
                    <i></i>
                    <p><span id="mode">Dark</span> Mode</p>
                </p>
            </div>
        </header>
    )
}

export default Header;