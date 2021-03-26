import React, {useState, useEffect}  from 'react'
import './_main.scss';
import {SearchBar, Select, Card} from '../../components/Components';


const Main = () => {

    const [allCountries, setAllCountries] = useState([])
    const [region, setRegion] = useState('europe')

    useEffect(() => {
        fetchCountries();

    }, [region])

    const fetchCountries = async (area) => {
        area = region
        const data = await fetch(`https://restcountries.eu/rest/v2/region/${area}`)
        const countries =  await data.json()
        setAllCountries(countries)
  
    }

  
    const selectRegion = () => {
       
       
        let selections = document.querySelector('.select__selection')
        let arrow = document.querySelector('#arrow')
        if (selections.classList.contains('hide')){
            selections.classList.remove('hide')
            arrow.classList.add('open')
        } else {
            selections.classList.add('hide')
            arrow.classList.remove('open')
        }
    }

    const changeRegion = (e) => {
        let newRegion = e.target.innerText
        setRegion(newRegion)
        
    }
 
    return (
        <main className="main">
            <nav className="nav container">
                <div className="nav__search">
                    <SearchBar />
                </div>
                <div className="nav__select">
                    <Select 
                        handleClick={selectRegion}
                        changeRegion={changeRegion}
                    />
                </div>
            </nav>
            <div className="list container">
                {allCountries.map(country => {
                    return <Card 
                                key={country.alpha2Code}
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