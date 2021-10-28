import React from 'react'
import './_header.scss'
import {Link} from 'react-router-dom'



const Header = (props) => {

    return (
        <header className="header to-switch">
            <div className="header__banner container">
                <h1 className="header__logo"><Link to={'/'}>Where in the world?</Link></h1>
                <div className="header__switch to-switch" onClick={props.switchToDark}>
                    <i></i>
                    <p><span id="mode">Dark</span> Mode</p>
                </div>
            </div>
        </header>
    )
}

export default Header;