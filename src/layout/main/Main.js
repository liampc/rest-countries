import React from 'react'
import './_main.scss';
import {SearchBar, Select, Card} from '../../components/Components';




const Main = () => {
    return (
        <main className="main">
            <nav className="nav container">
                <div className="nav__search">
                    <SearchBar />
                </div>
                <div className="nav__select">
                    <Select />
                </div>
            </nav>
            <div className="list container">
                <Card />
            </div>
        </main>
    )
}

export default Main