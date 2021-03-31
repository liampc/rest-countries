import React from 'react'
import './_components.scss'
import {Link} from 'react-router-dom'


const SearchBar = (props) => {
    return (
        <form className="searchBar to-switch">
            <i><ion-icon name="search-outline"></ion-icon></i>
            <input type="text" onChange={props.handleChange} value={props.value} placeholder="Search for a country..." />
        </form>
    )
}

const Select = (props) => {
    return (
        <div className="select"> 
            <div className="select__title to-switch" onClick={props.handleClick}>Filter by region <i id="arrow"><ion-icon name="chevron-down-outline"></ion-icon></i></div>
            <div className="select__selection hide to-switch">
                <div onClick={(e) => props.changeRegion(e)} className="">Africa</div>
                <div onClick={(e) => props.changeRegion(e)}>Americas</div>
                <div onClick={(e) => props.changeRegion(e)}>Asia</div>
                <div onClick={(e) => props.changeRegion(e)}>Europe</div>
                <div onClick={(e) => props.changeRegion(e)}>Oceania</div>
            </div>
        </div>
    )
}

const Card = (props) => {
    return (
        <div className="card to-switch">
            <Link to={`${props.name}`}>
                <div className="card__pic" style={{backgroundImage: `url(${props.flag})`}}></div>
                <div className="card__info container-padding-lr">
                    <h2><Link to={`${props.name}`}>{props.name}</Link></h2>
                    <p>Population: <span>{props.population.toLocaleString()}</span></p>
                    <p>Region: <span>{props.region}</span></p>
                    <p>Capital: <span>{props.capital}</span></p>
                </div>
            </Link>
        </div>
    )
}

export {
    SearchBar,
    Select,
    Card
}