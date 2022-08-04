import React from "react"
import '../App.css'
import { FaReact , FaNodeJs , FaHtml5 , FaPython , FaCss3 , FaCheck, FaNpm} from "react-icons/fa"
import { DiMongodb,DiFirebase,DiHeroku, DiGit, DiGithub, DiAndroid } from "react-icons/di";
import { SiPostman} from "react-icons/si";
import Footer from "../components/Footer";
import background from '../pics/background.jpg'
import {  Button } from "@mui/material";


const Home = () => {

    return (
        <React.Fragment>
            <div style={{ backgroundImage: `url(${background})`}}>

            <div class="home">
                    <div class="home-content"> 
                        <p class="text-2">Nikhil <span class='color'>Singh</span></p>
                        <p clas="text-3">Web & Android Developer</p>
                    </div>
            </div>
              
            <div class='about'>
                With 2 years of experience in programming i believe in <span class='color'> "Learn & Implement"</span>. 
                I am  highly enthusiastic, delivery focused and always motivated in taking up challenges and solving them technically.<br/>
                <p clas='p-about'>I am an undergrad in <span class='color'>Computer Application.</span> 
                <Button href="https://blogbackend7.herokuapp.com/cv">Download Resume</Button>
                </p> 
            </div>

            <div class='skills'>
                <h5 class='highlight'>HIGHLIGHTS</h5>

                <div class='list'>
                    <FaCheck />  <span class='list-text'>MERN Stack Developer</span> <br/> 
                    <FaCheck />  <span class='list-text'>IIT Madras Certified Python Developer</span> <br/>
                    <FaCheck />  <span class='list-text'>Android Developer</span> <br/>
                    <FaCheck />  <span class='list-text'>Strong decision maker </span>  <br/>
                    <FaCheck />  <span class='list-text'>Complex Problem Solver </span>  <br/>
                    <FaCheck />  <span class='list-text'>DBMS</span>  <br/>
                </div>

                <h5 class='highlight'>PROGRAMMING LANGUAGES & FRAMEWORKS</h5>
                <div class = 'languages'>
                    <FaReact /> <FaNodeJs/> <FaPython/>  <DiAndroid/> <FaNpm/> <SiPostman /> <FaHtml5/> <FaCss3/>  <DiMongodb/> <DiFirebase/> <DiHeroku/> <DiGit/> <DiGithub/>
                </div>
               
            </div>
            </div>
            <Footer/>

            </React.Fragment>
    )
}
export default Home