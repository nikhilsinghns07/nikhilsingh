import React, {useState } from 'react'
import {Card,Alert,CircularProgress,CardActions,Button,CardContent,CardMedia,Typography,TextField} from '@mui/material'
import bg from '../../pics/addpostbg.jpg'
import BlogFooter from '../components/BlogFooter'
import { useNavigate } from 'react-router-dom'
import {Nav,Container,Navbar,Image} from 'react-bootstrap'
import {NavLink} from '../../components/NavbarElements'
import classes from '../components/blog.module.css'
import logo from '../../pics/logoblack.png'

const CreatePost = () => {
    const username = window.localStorage.getItem("username")
    const [content,setContent] = useState('')
    const [title,setTitle] = useState('')
    const [url,setUrl] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    let navigate = useNavigate()
    let error

    const postSubmiHandler = () => {
        if(!title || !content) {
            setErrorMessage('Please Provide the complete details.')
            return;

        }
        setIsLoading(true)

        fetch('https://api-nikhilsingh7.herokuapp.com/createpost',{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "author" : username,
                "title" : title,
                "content" : content,
                "imageUrl" : url
            })
        }).then(res => res.json())
        .then(data => {
            setIsLoading(false)
            error = data.error

            if(error) {
                setErrorMessage(error)
                return;
            }
           navigate('/blog')
        })
    }

    const cancelButtonHandler = () => {
        navigate('/blog')
    }


    
    return (
        <React.Fragment>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand> 
                    <NavLink to='/'>
                        <Image src={logo} height='75' width='75'/>
                    </NavLink>
                </Navbar.Brand>
                    <div className={classes.navcontainer}>
                        <Nav className="me-auto" >
                            <NavLink to='/blog'>
                                <Button variant="outlined"> Home</Button>
                            </NavLink>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
            <div style={{backgroundColor:'black'}}>
                <Card sx={{margin:4}}>
                    <CardMedia component="img" height="200" image={bg} alt="bg image"/>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
                            {errorMessage ?  <Alert severity="error">{errorMessage}</Alert>: null}
                    </div>

                    {isLoading ? <CircularProgress /> : null}

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>Create A Post</Typography>
                        <div style={{display:'flex',flexDirection:'column',width:'80%',marginLeft:'10%'}}>
                            <TextField id="filled-basic" label="Title For Your Post" variant="filled" value={title} onChange={(e) => setTitle(e.target.value)}/> <br />
                            <TextField id="filled-basic" label="Content" variant="filled"  multiline value={content} onChange={(e) => setContent(e.target.value)}/> <br />
                            <TextField id="filled-basic" label="ImageUrl (Optional)" variant="filled" value={url} onChange={(e) => setUrl(e.target.value)}/> <br />
                        </div>
                    </CardContent>

                    <CardActions>
                        <Button size="large" color="error" variant='outlined' onClick={() => {cancelButtonHandler()} }>Cancel</Button>
                        <Button size="large" color="primary" variant='contained' onClick={() => {postSubmiHandler()}}>Create</Button>
                    </CardActions>

                </Card>
            </div>
            <BlogFooter />
        </React.Fragment>
    )
}

export default CreatePost
