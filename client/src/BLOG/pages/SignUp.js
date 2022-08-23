import React ,{ useState } from 'react'
import {TextField,CircularProgress,Alert,Button,Grid,CssBaseline,Paper,Box,Avatar,Typography} from "@mui/material"
import {NavLink} from '../../components/NavbarElements'
import { useNavigate } from 'react-router-dom';
import BlogFooter from '../components/BlogFooter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Signup = () => {
    const theme = createTheme();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUserName] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null)

    let navigate = useNavigate()
    let error;

    const signUpHandler = () => {
        if(!email || !password || !username){
            setErrorMessage("All the Fields are requried")
            return;
        }

        setIsLoading(true)
        fetch("https://api-nikhilsingh7.herokuapp.com/signup",{
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "username" : username,
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

            navigate('/login')
        })
    }
    
    return (
        <React.Fragment>
          
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
                            <Typography component="h1" variant="h5"> SIGN UP </Typography>

                            <div style={{flexDirection:'column',textAlign:'center',padding:10}}>
                                {isLoading ? <CircularProgress /> : null}
                            </div>
                            <Box >
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
                                    {errorMessage ?  <Alert severity="error">{errorMessage}</Alert>: null}
                                </div>
                                <TextField margin="normal" required fullWidth label="User Name" value={username} onChange={(e) => setUserName(e.target.value)} autoFocus/>
                                <TextField margin="normal" required fullWidth label="Email" autoComplete="email"  value={email} onChange={(e) => setEmail(e.target.value)} autoFocus/>
                                <TextField margin="normal" required fullWidth label="Password" type="password" value={password} onChange = {(e) => {setPassword(e.target.value)}} id="password" autoComplete="current-password"/>
                                <Button fullWidth variant="contained"sx={{ mt: 3, mb: 2 }} onClick={() => {signUpHandler()}}>SignUp</Button>
                                <Grid container>
                                    <Grid item>
                                        <NavLink to='/login'>{"Already have an account? Sign In"}</NavLink>
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

export default Signup

