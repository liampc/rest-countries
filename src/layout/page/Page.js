import React, {useState, useEffect} from 'react'
import './_page.scss'
import image from '../../assets/germany.png'

const Page = ( {match} ) => {

    const [country, setCountry] = useState()

    useEffect(() => {
        // fetchCountry()
        
    }, [])


    // const fetchCountry = async () => {
    //     const response = await fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}?fullText=true`)
    //     const data = await response.json()
    //     console.log(data[0])
    //     setCountry(data[0])
    // }

    return (
        <div className="page">
            <div className="page__nav container">
                 <div className="button">
                    <a href="#"><i><ion-icon name="arrow-back-outline"></ion-icon></i>Back</a>
                 </div>
            </div>
            <div className="page__detail container">
                <div className="detail">
                    <div className="detail__flag" style={{backgroundImage: `url(${image})`}}></div>
                    <div className="detail__info">
                        <h2>Belgium</h2>
                        <div>
                            <p>Native Name: <span>Belgie</span></p>
                            <p>Population: <span>11,319,511</span></p>
                            <p>Region: <span>Europe</span></p>
                            <p>Subregion: <span>Western Europe</span></p>
                            <p>Capital: <span>Brussels</span></p>
                        </div>
                        <div>
                            <p>Top Level Domain: <span>Belgie</span></p>
                            <p>Currencies: <span>11,319,511</span></p>
                            <p>Languages: <span>Dutch, French, German </span></p>
                        </div>
                        <div>
                            <h3>Border Countries:</h3>
                            <div className="detail__countries">
                                <div>France</div>
                                <div>Germany</div>
                                <div>Netherlands</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page