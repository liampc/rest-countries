import React, {useState, useEffect}  from 'react'
import './_main.scss';
import {SearchBar, Select, Card} from '../../components/Components';


const Main = () => {

    const [allCountries, setAllCountries] = useState([])

    useEffect(() => {
        fetchCountries();
    }, [])

    const fetchCountries = async () => {
        const data = await fetch('https://restcountries.eu/rest/v2/regionalbloc/eu')
        const countries =  await data.json()
        setAllCountries(countries)
        console.log(countries)
    }

  

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
                {allCountries.map(country => {
                    return <Card 
                                name={country.name} 
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                flag={country.flag}
                            />
                })}
                
            </div>
        </main>
    )
}

export default Main