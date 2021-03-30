import React, {useState, useEffect} from 'react'
import './_page.scss'
import image from '../../assets/germany.png'

const Page = ( {match} ) => {

    const [country, setCountry] = useState([])
    const [currency, setCurrency] = useState('')
    const [languages, setLanguages] = useState([])
    const [codes, setCodes] = useState('')
    const [borders, setBorders] = useState([])

    useEffect(() => {
        fetchCountry()
    }, [])


    const fetchCountry = async () => {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}?fullText=true`)
        const data = await response.json()
        console.log(data[0])
        setCountry(data[0])
        setCurrency(data[0].currencies[0].name)
        setLanguages(data[0].languages)
        let updated = ''

        data[0].borders.forEach(el => {
            updated += `${el};`
        })
    
        setCodes(updated)
      
        const response2 = await fetch(`https://restcountries.eu/rest/v2/alpha?codes=${updated}`)
        const data2 = await response2.json()
        console.log(data2)
        setBorders(data2)

    }

   
   


    return (
        <div className="page to-switch">
            <div className="page__nav container">
                 <div className="button to-switch">
                    <a href="#"><i><ion-icon name="arrow-back-outline"></ion-icon></i>Back</a>
                 </div>
            </div>
            <div className="page__detail container">
                <div className="detail">
                    <div className="detail__flag" style={{backgroundImage: `url(${image})`}}></div>
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
                            
                                {borders.map(item => {
                                    return <div key={item.name} className="detail__card to-switch">{item.name}</div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page