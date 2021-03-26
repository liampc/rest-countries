import React from 'react'
import './_components.scss'


const SearchBar = () => {
    return (
        <form className="searchBar">
            <i><ion-icon name="search-outline"></ion-icon></i>
            <input type="text" placeholder="Search for a country..." />
        </form>
    )
}

const Select = () => {
    return (
        <div className="select"> 
            <div className="select__title">Filter by region <i><ion-icon name="chevron-down-outline"></ion-icon></i></div>
            <div className="select__selection">
                <div className="selected">Africa</div>
                <div>America</div>
                <div>Asia</div>
                <div>Europe</div>
                <div>Oceania</div>
            </div>
        </div>
    )
}

const Card = (props) => {
    return (
        <div className="card">
            {/* <div className="card__pic" style={{backgroundImage: `url(${flag})`}}></div> */}
            <div className="card__pic" style={{backgroundImage: `url(${props.flag})`}}></div>
            <div className="card__info container-padding-lr">
                <h2>{props.name}</h2>
                <p>Population: <span>{props.population.toLocaleString()}</span></p>
                <p>Region: <span>{props.region}</span></p>
                <p>Capital: <span>{props.capital}</span></p>
            </div>
        </div>
    )
}

export {
    SearchBar,
    Select,
    Card
}