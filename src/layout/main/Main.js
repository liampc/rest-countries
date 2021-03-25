import React from 'react'
import './_main.scss';

const Main = () => {
    return (
        <main className="main">
            <nav className="nav container">
                <form className="searchBar">
                    <i><ion-icon name="search-outline"></ion-icon></i>
                    <input type="text" placeholder="Search for a country..." />
                </form>
            </nav>
            
        </main>
    )
}

export default Main