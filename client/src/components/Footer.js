import React from "react"
import { useState } from "react"
import './style.css'
import axios from 'axios'
import { FaGithub, FaLinkedin} from "react-icons/fa"
import { ExternalLink } from 'react-external-link';

const Footer = () => {
    const [enteredName , setEnteredName] = useState('')
    const [enteredMessage , setEnteredMessage] = useState('')
    const [emailSent,setEmailSent] = useState(false)

    const nameHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const messageHandler = (event) => {
        setEnteredMessage(event.target.value)
    }

    const submitHandler = async(event) => {
        try{
            await axios.post("/send",{
                name : enteredName,
                message : enteredMessage
            }).then(res=>{
                setEmailSent(true)
            })
        }catch(error){
        }
        setEnteredName('')
        setEnteredMessage('')
    }

    return(
        <React.Fragment>
            
            <footer class='footer'>
                <span class='icons'>  
                <ExternalLink href="https://www.linkedin.com/in/nikhilsinghns07/"> <FaLinkedin/> </ExternalLink>
                <ExternalLink href="https://github.com/nikhilsinghns07" > <FaGithub /> </ExternalLink> 
                </span>
                
                <form  class='form' onSubmit={submitHandler} >
                        <span class='emailsent'>{emailSent ? <p>Email Sent</p> : null }</span>
                        <div class='control'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name' value={enteredName} onChange={nameHandler}/>
                        </div>

                        <div class='control'>
                            <label htmlFor='text'>Contact Details</label>
                            <input type='text' id='message' value={enteredMessage} onChange={messageHandler} />
                        </div>

                        <div class='actions'>
                           <button class='btn'>Send</button>
                        </div>
                </form>
                    
            </footer>
        </React.Fragment>
    )
   
}

export default Footer