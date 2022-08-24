import React,{useState,useEffect} from 'react';
import {CircularProgress,Box,Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material'
import background from '../../pics/blogbg.jpg'
import { useNavigate } from "react-router-dom";
import {Nav,Container,Navbar,Image} from 'react-bootstrap'
import { NavLink } from '../../components/NavbarElements'
import classes from '../components/blog.module.css'
import logo from '../../pics/logoblack.png'
import AccountMenu from '../components/Menu'
import BlogFooter from '../components/BlogFooter';

const UserPost = () => {
    let username;
    const [loading,setLoading] = useState(false)
    const [userpost,setUserPost] = useState([])
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    let token
    let navigate = useNavigate();
    
    username = window.localStorage.getItem('username')
    console.log(username)
    
    const fetchUserPost = () => {
        setLoading(true)
        fetch('https://api-nikhilsingh7.herokuapp.com/userpost',{
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "username" : username
            })
        }).then(res => res.json())
        .then(data => {
            setLoading(false)
            setUserPost(data.posts)     
        })
    }



    const editPostHandler = (id) => {
        window.localStorage.setItem('editposttoken',id)
        navigate('/editPost')
    }

    const deletePostHandler = (id) => {
        fetch('https://api-nikhilsingh7.herokuapp.com/deletepost',{
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "postId" : id
            })
        }).then(res => res.json())
        .then(data => {
            if(data.success === "Deleted"){
                navigate('/blog')
            }
        })
    }

    useEffect(() => {
        fetchUserPost()
        token = window.localStorage.getItem("loginToken")
        if(token != null){
          setIsLoggedIn(true)
        }
    },[])

    return (
        <React.Fragment>
            <div style={{ backgroundImage: `url(${background})`}}>
                <Navbar bg="light" variant="light">
                    <Container>
                    <Navbar.Brand> 
                        <NavLink to='/'>
                            <Image src={logo} height='75' width='75'/>
                        </NavLink>
                    </Navbar.Brand>
                        <div className={classes.navcontainer}>
                        <Nav className="me-auto" >
                            <Button variant="outlined" ><NavLink to='/blog'>Home</NavLink></Button>
                            {isLoggedIn === true ? <AccountMenu/> : <Button  variant="outlined"><NavLink to='/login'>Login</NavLink></Button>} 
                        </Nav>
                        </div>
                    </Container>
                </Navbar>

                { loading === true ? 
                <Box style={{textAlign:'center',padding:2}}>
                    <CircularProgress /> 
                    <p>Loading</p>
                </Box> : null 
                }

    

                {   
                    (userpost?.length > 0 ?
                
                        (userpost.map((post,idx) => 
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',padding:10,}}>
                                <Card sx={{ width:'100%' }}  key={idx}>
                                    <CardMedia component="img" height="200" image={post?.imageUrl || 'https://source.unsplash.com/random'} alt="Post Image"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        {post.content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => {editPostHandler(post._id)}}>Edit</Button>
                                        <Button size="small" onClick={() => {deletePostHandler(post._id)}}>Delete</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        ))
                        : 
                        (
                            <div style={{textAlign:'center',padding:'2rem'}}>
                                <h2 > No Posts Found</h2>
                                <Button variant="outlined" ><NavLink to='/createPost'> Create a Post </NavLink></Button>
                            </div> 
                        )
                    )  
                }
                
            </div>
            <BlogFooter />
        </React.Fragment>
  );
}

export default UserPost