import React from 'react'
import './_main.scss';

import flag from '../../assets/germany.png'

const Main = () => {
    return (
        <main className="main">
            <nav className="nav container">
                <div className="nav__search">
                    <form className="searchBar">
                        <i><ion-icon name="search-outline"></ion-icon></i>
                        <input type="text" placeholder="Search for a country..." />
                    </form>
                </div>
                <div className="nav__select">
                    <div className="select"> 
                        <div className="select__title">Filter by region <i><ion-icon name="chevron-down-outline"></ion-icon></i></div>
                        <div className="select__selection">
                            <div className="selected">Africa</div>
                            <div>America</div>
                            <div>Asia</div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="list container">
                <div className="card">
                    <div className="card__pic" style={{backgroundImage: `url(${flag})`}}></div>
                    <div className="card__info container-padding-lr">
                        <h2>Germany</h2>
                        <p>Population: <span>81,200,000</span></p>
                        <p>Region: <span>Europe</span></p>
                        <p>Capital: <span>Berlin</span></p>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Main