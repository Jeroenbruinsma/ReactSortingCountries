import React from 'react'

export default function Country(props) {
    return (
        <div>
            {props.data.name}
            <ul>
                <li>{`Capital: ${props.data.capital}`} </li>
                <li>{`Population: ${props.data.population / 1000000}`} </li>
                <li>{`Size: ${props.data.area}`} </li>
                <button>increase score</button>
            </ul>
        </div>
    )
}
