import * as React from 'react';
import {CssBaseline,Box,Typography,Link,styled,Paper} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import classes from './blog.module.css'
import { ExternalLink } from 'react-external-link';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Logo from '../../pics/logoblack.png'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://nikhilsingh07.herokuapp.com">NS</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function BlogFooter() {
  return (
    <>

    <div className={classes.container}>
        <CssBaseline />
        <Box component="footer" sx={{py: 3,px: 2,mt: 'auto', backgroundColor:'orangered'}}>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected :</span>
                </div>

                <div>
                    <ExternalLink className='me-4 text-reset' href="https://www.linkedin.com/nikhilsinghns07"> <LinkedInIcon/> </ExternalLink>
                    <ExternalLink className='me-4 text-reset' href="https://www.github.com/nikhilsinghns07"> <GitHubIcon /> </ExternalLink>
                </div>
            </section>
            <section className=''>
                <MDBContainer >
                    <MDBRow >
                        <MDBCol>
                        <h6 > <MDBIcon icon="gem" className="me-3" /> Nikhil Singh </h6>
                        <img src={Logo} height='50%' width='18%'  />
                        </MDBCol>

                        
                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                        <p> <a href='#!' className='text-reset'> Blog </a> </p>
                        <p> <a href='#!' className='text-reset'> Download </a> </p>
                        
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                        <p> <MDBIcon icon="envelope" className="me-3" /> nikhilsinghns01@gmail.com</p>
                        </MDBCol>
                        
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className='text-reset fw-bold' href='https://nikhilsingh07.herokuapp.com'> nikhilsingh07</a>
            </div>
        </Box>        
    </div>
    </>
  );
}