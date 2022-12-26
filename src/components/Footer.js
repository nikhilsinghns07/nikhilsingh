import React from "react"
import { useState } from "react"
import './style.css'
import { FaGithub, FaLinkedin} from "react-icons/fa"
import { ExternalLink } from 'react-external-link';
import {Button,TextField} from '@mui/material'

const Footer = () => {
    const [enteredName , setEnteredName] = useState('')
    const [enteredMessage , setEnteredMessage] = useState('')
    const [error,setError] = useState('')
    const [sucess,setSucess] = useState('')
   
    const emailHandler = () => {
        if(!enteredName || !enteredMessage){
            setError('All Fields are required')
            return
        }

        fetch("https://api-nikhilsingh7.herokuapp.com/send",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "name" : enteredName,
                "message" : enteredMessage
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.error){
                setError(error)
            }

            if(data.success){
                setSucess(sucess)
                window.location.reload()
            }
        })
    }

    return(
        <React.Fragment>
            <footer class='footer'>

                <div class='container'>
                    
                    <span class='icons'>  
                        <ExternalLink href="https://www.linkedin.com/in/nikhilsinghns07/"> <FaLinkedin/> </ExternalLink>
                        <ExternalLink href="https://github.com/nikhilsinghns07" > <FaGithub /> </ExternalLink> 
                    </span>

                    <div class='control'>
                    <div>
                        {error ? <p class='error'>{error}</p> : <p class='error'>{sucess}</p>}
                    </div>
                        <TextField margin="normal" required fullWidth label="Email"  autoComplete="email"  value={enteredName} onChange={(e) => setEnteredName(e.target.value)} />
                        <TextField margin="normal" required fullWidth label="Message" value={enteredMessage} onChange={(e) => setEnteredMessage(e.target.value)} />
                        <Button variant="contained" color="success" onClick={() => {emailHandler()}}>Send</Button>
                    </div>

                </div>         
                    
            </footer>
        </React.Fragment>
    )
   
}

export default Footer