import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../Componenets/Footer.css'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div>
 <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

 <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>




      <section className=''> 
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Puppy🐶Hub
              </h6>
              <p>
              Explore our range of premium dog and cat food for your beloved pets. Providing nutrition and care, one bowl at a time.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <Link className='text-reset' to="/Dog"><a className='text-reset'>
                  Dog
                </a></Link>
              </p>
              <p>
                <Link className='text-reset' to="/Birds"><a className='text-reset'>
                  Bird
                </a></Link>
              </p>
              <p>
                <Link className='text-reset' to="/Fish"><a className='text-reset'>
                  Fish
                </a></Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link className='text-reset' to="/Groom"><a className='text-reset'>
                  Grooming
                </a></Link>
              </p>
              <p>
                <Link className='text-reset' to="/Medicine"><a className='text-reset'>
                  Medicine
                </a></Link>
              </p>
              <p>
                <Link className='text-reset' to="/Toy"><a className='text-reset'>
                  Toys
                </a></Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                 calicut,kerala
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Jishmalkanichadi712@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 8686868686
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold'>
        PuppyHub.com
        </a>
      </div>
    </MDBFooter> 











    </div>
  )
}

export default Footer