import React, {useState} from 'react'
import './_header.scss'
import {Link} from 'react-router-dom'



const Header = (props) => {

    return (
        <header className="header to-switch">
            <div className="header__banner container">
                <Link to={'/'}><h1 className="header__logo">Where in the world?</h1></Link>
                <p className="header__switch to-switch" onClick={props.switchToDark}>
                    <i></i>
                    <p><span id="mode">Dark</span> Mode</p>
                </p>
            </div>
        </header>
    )
}

export default Header;