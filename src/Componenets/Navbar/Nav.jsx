import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom'
import { IoLogOut } from "react-icons/io5";

export const Navbarmain = ({
  state,
  displaybool,
  setSearch,
  displaylogin,
  users,
  setUser,
  usermail,
  setUsermail,
  cart,
  addtoCart,
  setdisplaylogin,
  setShow,
}) => {
  const Navigate = useNavigate()

  const searchRef = useRef()

  function setCarttouser() {
    let dummyuses = users.map((user) => {
      if (user.mail === usermail.mail) {
        return { ...user, carts: cart }
      }
      return user
    })
    setUser(dummyuses)
    addtoCart([])
    setUsermail(null)
    setdisplaylogin(false)
    Navigate('/')
  }

  function takeSearch() {
    const val=searchRef.current.value;
    // console.log(state)
    // console.log(val);
    const newArr = state.filter((item) => item.name.toLowerCase().includes(val.toLowerCase()))
    setSearch(newArr)
    // console.log(newArr,"newarr")
    Navigate('/searchresult')
  }
 
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" >
          <Container fluid>
            <Navbar.Brand><Link to='/' className='link'>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#198754', fontFamily: 'cursive', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Puppy🐶</span>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#198754', fontFamily: 'cursive',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Hub</span>
              </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link >
                    <Link to={'/'} className='link'>
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link >
                    <Link to={'/category'} className='link'>
                      Category
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={'/Products'} className='link'>
                      Product
                    </Link>
                  </Nav.Link>
                  <NavDropdown
                    title="User"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item onClick={()=> Navigate("/login")}>Login</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => Navigate("/users")}>Users</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClickCapture={()=>Navigate("/login")}>Admin</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  {/* {displaybool ? (
                  <> */}
                   <Button variant="outline-success" onClick={()=>Navigate("/Cart")} className='nav__button'>cart</Button>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    ref={searchRef}
                  />
                  <Button variant="outline-success" 
                          onClick={takeSearch}
                          // style={{ fontSize: "1.eem"}}
                          className='nav__button'>
                    Search
                  </Button>
                  {/* </>
                 ) : (
                  <></>
                 )} */}
                </Form>
                <div>
                  {!displaylogin ?(
                    <>
                     <Button variant="outline-success"
                     onClick={()=> Navigate("/login")}
                      // style={{ fontSize: "1.2em"}}
                      className='nav__button'>Login</Button>
                    </>
                  ):(<></>
                  )}
                  <></>
                </div>
                  <>
                  <span 
                    style={{
                      width: "50px",
                      overflow:"hidden",
                      height: "50px",
                  }}
                  >
                   
                    {/* <img
                      src={usermail.image}
                      style={{ width: "30px", height:"30px", borderRadius: "50%"}}
                      className='img-fluid' onClick={()=>setShow(true)}
                      /> */}
                      <Button variant="outline-success"
                      className='nav__button'
                      // style={{marginLeft: "5px", alignItems: "center" ,marginRight: "10px"}}
                      onClick={setCarttouser}
                      >
                        <IoLogOut style={{ fontSize: "1.2em"}}/>
                    </Button>

                 
                </span>
                </>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}
