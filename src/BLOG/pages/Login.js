import React,{ useState } from 'react'
import {CircularProgress,TextField,Button,Alert,Grid,CssBaseline,Paper,Box,Avatar,Typography,Link} from '@mui/material'
import { useNavigate } from "react-router-dom";
import BlogFooter from '../components/BlogFooter'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {NavLink} from '../../components/NavbarElements';
import {Nav,Container,Navbar,Image} from 'react-bootstrap'
import logo from '../../pics/logoblack.png'
import classes from '../components/blog.module.css'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null)
    const theme = createTheme();
    let navigate = useNavigate();
    let error,token,username,sname;

    const loginHandler =  () => {
        if(!email || !password) {
            setErrorMessage('Enter Email & Password')
            return;
        }

        setIsLoading(true)
        fetch("https://api-nikhilsingh7.herokuapp.com/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "email" : email,
                "password" : password
            })
        }).then(res => res.json())
        .then(data => {
            error = data.error
            setErrorMessage(data.error)
            setIsLoading(false)

            if(error) {
                return;
            }
            token = data.token
            username = data.username
            sname = data.sname
            window.localStorage.setItem("loginToken", token);
            window.localStorage.setItem("username",username)
            window.localStorage.setItem("sname",sname)
            navigate('/blog')
        })
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
                            <Button variant="outlined" ><NavLink to='/blog'>Home</NavLink></Button> 
                        </Nav>
                        </div>
                    </Container>
            </Navbar>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}/>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box sx={{ my: 8,mx: 4,display: 'flex',flexDirection: 'column',alignItems: 'center', }}>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                            Sign in
                            </Typography>
                            <div style={{flexDirection:'column',textAlign:'center',padding:10}}>
                                {isLoading ? <CircularProgress /> : null}
                            </div>
                            <Box >
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
                                {errorMessage ?  <Alert severity="error">{errorMessage}</Alert>: null}
                            </div>
                            <TextField margin="normal" required fullWidth label="Email" autoComplete="email"  value={email} onChange={(e) => setEmail(e.target.value)} autoFocus/>
                            <TextField margin="normal" required fullWidth label="Password" type="password" value={password} onChange = {(e) => {setPassword(e.target.value)}} id="password" autoComplete="current-password"/>
                            <Button fullWidth variant="contained"sx={{ mt: 3, mb: 2 }} onClick={() => {loginHandler()}}>Login</Button>
                            <Grid container>
                                <Grid item xs>
                                <NavLink to='/resetPassword'>{"Forgot Password ?"}</NavLink>
                                </Grid>
                                <Grid item>
                                <NavLink to='/signup'>{"Don't have an account? Sign Up"}</NavLink>
                                </Grid>
                            </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
    </ThemeProvider>
            <BlogFooter />
        </React.Fragment>
    )
}

export default Login