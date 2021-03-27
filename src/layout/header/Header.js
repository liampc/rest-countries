import React from 'react'
import './_header.scss'



const Header = (props) => {
    return (
        <header className="header to-switch">
            <div className="header__banner container">
                <h1 className="header__logo">Where in the world?</h1>
                <p className="header__switch to-switch" onClick={props.handleClick}>
                    {/* <i><ion-icon name="moon-outline"></ion-icon></i> */}
                    <i></i>
                    <p><span id="mode">Dark</span> Mode</p>
                </p>
            </div>
        </header>
    )
}

export default Header;