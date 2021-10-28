import React, {useState, useEffect}  from 'react'
import './_main.scss';
import {SearchBar, Select, Card} from '../../components/Components';


const Main = (props) => {

    const [allCountries, setAllCountries] = useState([])
    const [region, setRegion] = useState('europe')
    const [inputValue, setInputValue] = useState('')
    const [searchResults, setSearchResults] = useState([])
    

    useEffect(() => {
        fetchCountries();

        let elems = document.querySelectorAll('.to-switch')
        if (props.darkMode === true){
            elems.forEach(el => {
                el.classList.add('dark')
            })
        } else if (props.darkMode === false){
            elems.forEach(el => {
                el.classList.remove('dark')
            })
        }

    }, [allCountries,region, inputValue, searchResults])

    const fetchCountries = async (area) => {
        area = region
        const data = await fetch(`https://restcountries.com/v2/region/${area}`)
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
        selectRegion()
    }

    const searchCountry = async (e) => {
        const value = e.target.value
        setInputValue(value)
        const data = await fetch(`https://restcountries.com/v2/name/${inputValue}`)
        const countries = await data.json()
        setSearchResults(countries)
    }
 
    let display;
    if (inputValue !== ""){
        try {
            display = searchResults.map(country => {
                    return <Card 
                                key={country.alpha2Code}
                                name={country.name} 
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                flag={country.flag}
                            />
                })
        } catch {
            display = "No results found"
        }

    } else if (inputValue === "") {
        display = allCountries.map(country => {
            return <Card 
                        key={country.alpha2Code}
                        name={country.name} 
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        flag={country.flag}
                    />
        })
    }
       
    


    return (
        <main className="main to-switch">
            <nav className="nav container">
                <div className="nav__search">
                    <SearchBar 
                        handleChange={searchCountry}
                        value={inputValue}
                    />
                </div>
                <div className="nav__select">
                    <Select 
                        handleClick={selectRegion}
                        changeRegion={changeRegion}
                    />
                </div>
            </nav>
            <div className="list container">
                {display}
            </div>
        </main>
    )
}

export default Main