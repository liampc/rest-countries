import React from 'react'
import './_header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__banner container">
                <h1 className="header__logo">Where in the world?</h1>
                <p className="header__switch">
                    <i><ion-icon name="moon-outline"></ion-icon></i>
                    <span>Dark Mode</span>
                </p>
            </div>
        </header>
    )
}

export default Header;