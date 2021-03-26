import React from 'react'
import './_main.scss';

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
                    {/* <select className="select" name="region" id="region">
                        <option className="select" value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select> */}
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
            
        </main>
    )
}

export default Main