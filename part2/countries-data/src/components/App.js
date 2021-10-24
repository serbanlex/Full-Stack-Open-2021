import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './Country'
import InputEntry from './InputEntry'

const App = () => {
    // countries will always hold all the countries that were initially given by the api. Will be left unaltered.
    const [countries, updateCountries] = useState([])

    // this will always be modified based on search filter
    const [filteredCountries, updateFilteredCountries] = useState([])

    useEffect(() =>{
        console.log('Fetching api data')

        const handler = (response) => {
            const countriesList = response.data
            updateFilteredCountries(countriesList)
            updateCountries(countriesList)   
        }

        axios.get("https://restcountries.com/v3.1/all").then(handler)
    }, [])

    const typingSearchHandler = (event) => {
        // case unsensitive search
        
        let newSearchValue = event.target.value.toLowerCase()
    
        const filteredCountries = countries.filter(country => country.name.common.toLowerCase().startsWith(newSearchValue))
        
        updateFilteredCountries(filteredCountries)
    }

    return (
        <div>
            <h1>Countries data</h1>
            <InputEntry name="country name" onChangeHandler={typingSearchHandler}/>
            {filteredCountries.map(
                country => <Country data={country}/>
            )}
        </div>
    )
}

export default App