import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Country from './Country'

export default function Countries() {
    const url = 'https://restcountries.eu/rest/v2/all'
    const [countries, set_countries] = useState([])
    const [sorting, set_sorting] = useState('population')
    
    const getCountries = async (url) => {
        const response = await Axios.get(url)
        set_countries(response.data)
    }
    useEffect(()=> {
        try{
            getCountries(url)

        }catch(err){
            console.log("got an error", err)
        }
    },[])

    const sortingHandler = (event) => {
        console.log("User changed the value",event.target.value )
        set_sorting(event.target.value)
    }
    if(sorting === 'population'){
      countries.sort( (a,b) =>  b.population - a.population)
    
    }
    if(sorting === 'size'){
        countries.sort((a,b) =>  b.area - a.area) 
    }



    return (
        <div>
            This component is working

            <select onChange={sortingHandler}>
                <option value="population">Population</option>
                <option value="size">Size</option>
                <option value="123">number</option>
            </select>

            <ul>

            {countries.map( (countryCard , i) => {
                return <li key={i}><Country data={countryCard} /></li>
            })}
            {countries.map( (countryCard , i) => {
                return <li key={i}><Country data={countryCard} /></li>
            })}
            </ul>
        </div>
    )
}
