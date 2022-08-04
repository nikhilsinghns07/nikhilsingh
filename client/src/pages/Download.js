import React from "react"
import Footer from "../components/Footer"
import {Card,CardHeader,Avatar,CardMedia,CardContent,Typography,Button} from '@mui/material'
import {ListItem,List} from '@mui/material'
import { red } from '@mui/material/colors';
import weatherAndroid from '../pics/weather1.jpg'
import gym1 from '../pics/gym1.jpg'
import News from '../pics/News.png'
import background from '../pics/background.jpg'
import blog from '../pics/blog.png'

import '../App.css'

const Download = () => {
    return(
        <React.Fragment>
            <div style={{ backgroundImage: `url(${background})`}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <br /><br />

                    <Card sx={{ maxWidth:345}} >
                        <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">W</Avatar>}
                        title="Weather"
                        subheader="Get Your Weather Details."
                        />
                        <CardMedia component="img" height="194" image={weatherAndroid} alt="Paella dish"/>
                        <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This is a Weather Forecast Android Application which gets your current co-ordinates for your location info
                            and provides with your Weather Forecast which includes :  <br/>
                            <List>
                                <ListItem disablePadding>Current Weather Details : Max,Min,Feels_Like,Wind Speed</ListItem>
                                <ListItem disablePadding>Pressure,Sunrise,Sunset,Humidity</ListItem>
                                <ListItem disablePadding>7-Day Forecast</ListItem>    
                            </List>
                        </Typography>
                        <Button href="https://drive.google.com/file/d/13ojIPt2YdgQTrw1UbKVrgiqQYUhlyHUZ/view?usp=sharing">Download Weather App </Button>
                        </CardContent>
                    </Card> 
                    <br /><br />

                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">B</Avatar>}
                        title="BeFit07"
                        subheader="App for Gym Freaks"
                        />
                        <CardMedia component="img" height="194" image={gym1} alt="Paella dish"/>
                        

                        <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        This is a Fitness android app desiged for beginners.It has many exercies specific to different muscle groups.
                        It has embedded Youtube Video to check your correct form.Yoga and Meditation guides option is also present.
                           
                        </Typography>
                        <Button href="https://drive.google.com/file/d/1WER3haabqP6yV5WQ_z1A9OEEujfz_qQs/view?usp=sharing">Download BeFit07 App</Button>
                        </CardContent>

                    </Card>
                    <br /><br />
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">B</Avatar>}
                        title="Blog"
                        subheader="Blog App"
                        />
                        <CardMedia component="img" height="194" image={blog} alt="Paella dish"/>
                        <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This is a blog app created by me.Where you will find regular content on various topics by a person who has
                            achieved in that particular subject.
                            Created this application using React-Native with all your privacy concerns in mind.Being a person who himself thinks a 
                            lot about a human's privacy,i have blocked all the extra permissions that has nothing to do with this app.
                            Runs on a secure backend that has been designed by me.
                        </Typography>
                        <Button href="https://drive.google.com/file/d/1Etl71owv8BWdLq_pcW-hGwNeL2Gc0yFX/view?usp=sharing">Download Blog App</Button>
                        </CardContent>

                    </Card>
                    <br /><br />

                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">N</Avatar>}
                        title="News"
                        subheader="Daily News on your palm"
                        />
                        <CardMedia component="img" height="194" image={News} alt="Paella dish"/>
                        <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This is a daily news application where you can remain updated with latest news.You can also browse on diffrenet categories 
                            or by different news providers.    
                        </Typography>
                        <Button href="https://drive.google.com/file/d/1M82KiR8NcFshx9o3YQoKzRFdDRt7QvBz/view?usp=sharing">Download News App</Button>
                        </CardContent>

                    </Card>
                    <br /><br />
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Download

