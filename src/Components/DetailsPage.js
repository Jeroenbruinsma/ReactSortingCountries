import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import Timeout from "await-timeout"


export default function DetailsPage() {
    const [countryInfo, set_countryInfo] = useState()
    const [status, set_status] =  useState("idle")

    const params = useParams()
    const history = useHistory()
    const url = `https://restcountries.eu/rest/v2/alpha/${params.countryCode}`

    const getCountryData = async(url) => {
        await Timeout.set(4000)
        const response = await Axios.get(url)
        set_countryInfo(response.data)
        set_status("done")
    }

    useEffect( ()=> {
        
        set_status("loading")
        getCountryData(url)
    }, [ ])

    const buttonHandler = (e) => {
        console.log("user clicked a button")
        //do some validations of userinput here??
        history.push("/")
    }
    
    console.log("what are my params??", params)
    if(!countryInfo) return "loading"
    
    return (
        <div>
            <p> App state: {status} </p>
            <button onClick={buttonHandler}>Go back to Home</button>
            <h1>{countryInfo.name}</h1>
             <p>Capital: {countryInfo.capital}</p>
             <p>Region: {countryInfo.region}</p>
             <p>Population: {countryInfo.population}</p>
             <p>Size: {countryInfo.area}</p>

        </div>
    )
}
