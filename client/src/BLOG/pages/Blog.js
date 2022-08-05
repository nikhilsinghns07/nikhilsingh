import React ,{useState,useEffect}  from 'react'
import {Button,Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,Typography,CircularProgress,Box} from '@mui/material'
import { red } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import BlogFooter from '../components/BlogFooter';
import {Nav,Container,Navbar,Image} from 'react-bootstrap'
import AccountMenu from '../components/Menu'
import{ NavLink} from '../../components/NavbarElements'
import logo from '../../pics/logoblack.png'
import classes from '../components/blog.module.css'

const Blog = () => {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  let token;
  let history = useNavigate();  

  const CreatePostValidator = () => {
    if(window.localStorage.getItem("loginToken") == null){
      history.push('/Login')
    }
    if(window.localStorage.getItem("loginToken") != null){
      history.push('/addPost')
    }
  }

  const fetchData = () => {
    setLoading(true)
    fetch('https://api-nikhilsingh7.herokuapp.com/getPost')
    .then((res) => res.json())
    .then(data => {
      setPosts(data.posts)
      setLoading(false)
      token = window.localStorage.getItem("loginToken")
      if(token != null){
        setIsLoggedIn(true)
      }
    })

  }

  useEffect(() => {
    fetchData()
  },[])

    return (
      <React.Fragment>
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="/"> <Image src={logo} height='75' width='75'/></Navbar.Brand>
            <div className={classes.navcontainer}>
              <Nav className="me-auto" >
                <Button variant="outlined"><NavLink to='/home'>Home</NavLink> </Button>
                <Button variant="outlined" onClick={() => {CreatePostValidator()}}>Create Post</Button>
                {isLoggedIn === true ? <AccountMenu/> : <NavLink to='/login'>Login</NavLink>} 
              </Nav>
            </div>
          </Container>
        </Navbar>
        <div style={{backgroundColor:'#1e2324',padding:10}}>
      
          { loading === true ? 
            <Box style={{textAlign:'center',padding:2}}>
              <CircularProgress /> 
              <p>Loading</p>
            </Box> : null 
          }
        
          {
            posts.map((post,idx) => 
            <div style={{
              display:'flex',
              flexDirection:'row',
              justifyContent:'space-around',
              padding:10,
            }}>
              <Card sx={{ width:'100%' }} key={idx} >
              <CardHeader 
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>
                } 
                title={post.title} 
                subheader={post.author}
              />
              <CardMedia component="img" height="194" image={post.imageUrl} alt="Post IMG"/>
              <CardContent>
                <Typography variant="body2" color="text.secondary">{post.content}</Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Typography variant="body2" color="text.secondary">{new Date(post.date).toDateString()}</Typography>
              
              </CardActions>
            </Card>
          </div>
        )
        }
        <BlogFooter />
        </div>
        
        </React.Fragment>
  );
}

export default Blog