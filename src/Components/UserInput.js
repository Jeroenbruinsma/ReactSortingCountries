import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

export default function UserInput() {
    const [input, set_input] = useState("")
    const history = useHistory()



    const inputHandler = (event) => {
        console.log("hello from input field")
        set_input(event.target.value)
    }
    const validatePassword = (event) => {
        console.log("lets check the password", input);
        if(input === "Pien"){
            console.log("Password was correct please redirect") 
            history.push("/verySecurePage")

        }else{
            set_input("")
        }
        
    }



    return (
        <div>
            <label>Password:</label>
            <input value={input} onChange={inputHandler} placeholder="please enter some text"/>
            <button onClick={validatePassword}>TRY! </button>
        </div>
    )
}
