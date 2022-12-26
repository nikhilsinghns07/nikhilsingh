import React ,{ useState } from 'react'
import {TextField,CircularProgress,Alert,AlertTitle,Button,Grid,CssBaseline,Paper,Box,Avatar,Typography} from "@mui/material"
import {NavLink} from '../../components/NavbarElements'
import { useNavigate } from 'react-router-dom';
import BlogFooter from '../components/BlogFooter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Nav,Container,Navbar,Image} from 'react-bootstrap'
import logo from '../../pics/logoblack.png'
import classes from '../components/blog.module.css'

const ForgotPassword = () => {

    const theme = createTheme();
    const [email,setEmail] = useState('')

    const [isLoading,setIsLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null)
    const [sucess,setSucess] = useState(false)
    
    let navigate = useNavigate()

    const resetPasswordHandler = () => {
        setIsLoading(true)
        fetch("https://api-nikhilsingh7.herokuapp.com/resetpassword",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({"email" : email})
        })
        .then(response => {
            if(response.status === 200) {
                setIsLoading(false)
                setSucess(true)
                setEmail('')
                setTimeout(function () {
                    navigate('/login')
                },12000)
            }

            if(response.status === 502) {
                setIsLoading(false)
                setSucess(false)
                setErrorMessage('Email Not associated with any account.')
                setEmail('')
            }
            
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
                            <Typography component="h1" variant="h5"> Reset Password  </Typography>

                            <div style={{flexDirection:'column',textAlign:'center',padding:10}}>
                                {isLoading ? <CircularProgress /> : null}
                            </div>

                            <Typography component="h1" variant="h5"> Enter your registered email address </Typography>

                            <Box >
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
                                    {errorMessage ?  <Alert severity="error">{errorMessage}</Alert>: null}
                                </div>
                                {sucess ? 
                                    <Alert severity="success">
                                        <AlertTitle>Email Sent</AlertTitle>
                                        <strong>Check your inbox!</strong>
                                    </Alert> 
                                    : null
                                }
                                <TextField margin="normal" required fullWidth label="Email" autoComplete="email"  value={email} onChange={(e) => setEmail(e.target.value)} autoFocus/>
                                <Button fullWidth variant="contained"sx={{ mt: 3, mb: 2 }} onClick ={() => {resetPasswordHandler()}}> Reset Password </Button>
                                
                            </Box>

                        </Box>

                    </Grid>
                </Grid>
            </ThemeProvider>
            <BlogFooter />
        </React.Fragment>
    )
}

export default ForgotPassword