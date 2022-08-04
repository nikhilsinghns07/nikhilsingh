import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Logo from '../pics/logoblack.png'
export default function Footer() {
  return (
    <MDBFooter bgColor='light' >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with me on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
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
    </MDBFooter>
  );
}