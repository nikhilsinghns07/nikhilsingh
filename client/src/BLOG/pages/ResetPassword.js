import React ,{ useState } from 'react'
import {TextField,CircularProgress,Alert,AlertTitle,Button,Grid,CssBaseline,Paper,Box,Avatar,Typography} from "@mui/material"
import {NavLink} from '../../components/NavbarElements'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import BlogFooter from '../components/BlogFooter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Nav,Container,Navbar,Image} from 'react-bootstrap'
import logo from '../../pics/logoblack.png'
import classes from '../components/blog.module.css'


const ResetPassword = () => {
    const theme = createTheme();
    const [newPassword,setNewPassword] = useState('')
    const [confirmNewPassword,setConfirmNewPassword] = useState('')

    const [isLoading,setIsLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null)
    const [sucess,setSucess] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const token = params.token
    const id = params.id

        
    const createPasswordHandler = () => {
        console.log(token)
        console.log(id)

        
        

        setIsLoading(true)

        if(newPassword !== confirmNewPassword) {
            setErrorMessage("Passwords Should Match")
            setIsLoading(false)
            return
        }

        

        fetch('https://api-nikhilsingh7.herokuapp.com/updatePassword',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "newPassword" : newPassword,
                "userId" : id,
                "token" : token
            })
        })
        .then(response => {
            if (response.status === 200) {
                setSucess(true)
                setIsLoading(false)
                setErrorMessage(null)
                setNewPassword('')
                setConfirmNewPassword('')
                setTimeout(function () {
                    navigate('/login')
                },12000)
            }

            if (response.status === 502) {
                setSucess(false)
                setIsLoading(false)
                setErrorMessage("Expired Or Invalid")
                setNewPassword('')
                setConfirmNewPassword('')
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
                            {sucess ? 
                                    <Alert severity="success">
                                        <AlertTitle>Password Changed</AlertTitle>
                                        <strong>You will be redirected to Login Page</strong>
                                    </Alert> 
                                    : null
                                }

                            <Typography component="h1" variant="h5"> Enter New Password </Typography>
                            
                            <Box >

                                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
                                    {errorMessage ?  <Alert severity="error">{errorMessage}</Alert>: null}
                                </div>


                                <TextField margin="normal" required fullWidth label="New Password" type="password"  value={newPassword} onChange={(e) => setNewPassword(e.target.value)} autoFocus/>
                                <TextField margin="normal" required fullWidth label="Confirm New Password"   value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} autoFocus/>

                                <Button fullWidth variant="contained"sx={{ mt: 3, mb: 2 }} onClick={() => {createPasswordHandler()}}> Validate</Button>
                                
                            </Box>

                        </Box>
                        
                    </Grid>
                </Grid>
            </ThemeProvider>
            <BlogFooter />
        </React.Fragment>
    )
}

export default ResetPassword