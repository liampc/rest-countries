import React, {useState, useEffect} from 'react'
import './_page.scss'
import {Link} from 'react-router-dom';


const Page = ( props ) => {

    const [country, setCountry] = useState([])
    const [currency, setCurrency] = useState('')
    const [languages, setLanguages] = useState([])
    const [codes, setCodes] = useState('')
    const [borders, setBorders] = useState([])
    

    useEffect(() => {
        fetchCountry()
        console.log(props.darkMode)
       

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

    }, [])


    const fetchCountry = async () => {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${props.match.params.id}?fullText=true`)
        const data = await response.json()
        setCountry(data[0])
        setCurrency(data[0].currencies[0].name)
        setLanguages(data[0].languages)
        let updated = ''

        try {
            data[0].borders.forEach(el => {
                updated += `${el};`
            })
        
            setCodes(updated)
        
            const response2 = await fetch(`https://restcountries.eu/rest/v2/alpha?codes=${updated}`)
            const data2 = await response2.json()
            setBorders(data2)
        } catch {
            setBorders([])
        }

    }

    let display;
    if (borders.length < 1){
        display = ''
    } else if (borders.length > 1) {
        display = borders.map(item => {
            return <div key={item.name} className="detail__card to-switch">{item.name}</div>
        })
    }
   


    return (
        <div className="page to-switch">
            <div className="page__nav container">
                 <div className="button to-switch">
                    <Link to={'/'}><i><ion-icon name="arrow-back-outline"></ion-icon></i>Back</Link>
                 </div>
            </div>
            <div className="page__detail container">
                <div className="detail">
                    <div className="detail__flag" style={{backgroundImage: `url(${country.flag})`}}></div>
                    <div className="detail__info">
                        <h2>{country.name}</h2>
                        <div className="detail__group">
                            <div>
                                <p>Native Name: <span>{country.nativeName}</span></p>
                                <p>Population: <span>{country.population}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                <p>Subregion: <span>{country.subregion}</span></p>
                                <p>Capital: <span>{country.capital}</span></p>
                            </div>
                            <div>
                                <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
                                <p>Currencies: <span>{currency}</span></p>
                                <p>Languages: 
                                    {languages.map((lang, index) => {
    
                                        if (index === languages.length - 1){
                                            return <span key={lang.name}> {lang.name}</span>
                                        } else {
                                            return <span key={lang.name}> {lang.name}, </span>
                                        }
                                      
                                    })}
                                </p>
                            </div>
                        </div>
                        <div className="detail__border">
                            <h3>Border Countries:</h3>
                            <div className="detail__countries to-switch">
                                    {display}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page