import React from 'react'

const Country = ({ data }) => {
    var independent = "yes"
    if (data.independent === false){
      independent = "no"
    }
    
    var languagesMap = data.languages
    var languagesList = []
    for(var key in languagesMap){
        var value = languagesMap[`${key}`]
        languagesList.push(value)
    }
    var langListItems  = languagesList.map(
        (lang) => <li> {lang} </li>
    )

    var currencyMap = data.currencies
    var currencyList = []
    for(key in currencyMap){
      const value = currencyMap[`${key}`]
      const currencyName = value.name
      const currencySimbol = value.symbol
      const currencyString = key + " - " + currencyName + " (" + currencySimbol + ")"
      currencyList.push(currencyString)
  }
  var currencyListItems  = currencyList.map(
      (currency) => <li> {currency} </li>
  )

  return (
    <div>
        <h1>{data.name.common} ({data.cca2})</h1>
        <img src={data.flags.png} alt={data.name.common}></img>
        <p><b>Capital</b>: {data.capital}</p>
        <p><b>Independent:</b> {independent}</p>
        <p><b>Currencies:</b> <ul>{currencyListItems}</ul></p>
        <p><b>Spoken languages: </b>
        <ul>{langListItems}</ul>
        </p>
        

    </div>
    

  )
}

export default Country