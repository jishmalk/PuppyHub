import React, { createContext, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Home'
import { Navbarmain } from './Componenets/Navbar/Nav'
import { items } from './Items'
import Products from './Componenets/Products'
import Dog from './Componenets/Dog'
import Cat from './Componenets/Cat'
import Toy from './Componenets/Toy'
import Groom from './Componenets/Groom'
import Birds from './Componenets/Birds'
import Medicine from './Componenets/Medicine'
import adminlogo from './Componenets/Admin/users.png'
import loger from './Componenets/images/Dog.png'
import Login from './Componenets/Login'
import { SearchPage } from './Componenets/Search'
import Dress from './Componenets/Dress'
import Fish from './Componenets/Fish'
import View from './Componenets/View'
import Signup from './Componenets/Signup'
import Cart from './Componenets/Cart'
import { validateEmail,validatePassword, validateCon_pass } from './Componenets/Validate'
import Footer from './Componenets/Footer'
import Product from './Componenets/Admin/Product'
import Editproducts from './Componenets/Admin/Editproducts'
import AdminMain from './Componenets/Admin/AdminMain'
import Offcanvas from "react-bootstrap/Offcanvas"
import Payment from './Componenets/Admin/Payment'
import Users from './Componenets/Admin/Users'
import Singleuser from './Componenets/Admin/Singleuser'
import Addproduct from './Componenets/Admin/Addproduct'
import Mainhome from './Mainhome'

export const newContext = createContext()
// const Rout = () => {

function Rout() {
  const [state, setState] = useState(items)
  const [cart, addtoCart] = useState([])

  
  const [displaybool, setDisplaybool] = useState(false)
  const [displaylogin, setdisplaylogin] = useState(false)
  const [search, setSearch] = useState('')

  const [users, setUser] = useState([
    {
      image: adminlogo,
      mail: 'admin@gmail.com',
      pass: 'admin@123',
      previlage: 'admin',
    },
    {
      image: loger,
      mail: 'gopu@gmail.com',
      pass: '123456',
      previlage: 'user',
    },
    {
      image: adminlogo,
      mail: 'minhaj@gmail.com',
      pass: 'minhu123',
      previlage: 'user',
    },
  ])
console.log(users)
  const [adminlogin, setAdminlogin] = useState(false)
  const [inpemail, setemail] = useState('')
  const [inppass, setPass] = useState(' ')

  const navigate = useNavigate()

  const [total, setTotal] = useState(0)

  //......//
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  //.....//

  const [usermail, setUsermail] = useState({})
  //qty
  function incrementqty(id) {
    let increment = cart.map((val) => {
      if (val.id === id) {
        return { ...val, qty: val.qty + 1, total: (val.qty + 1) * val.price }
      }
      return val
    })
    addtoCart(increment)
  }
  
  function decrementqty(id) {
    let increment = cart.map((val) => {
      if (val.id === id) {
        if (val.qty > 1) {
          return { ...val, qty: val.qty - 1, total: (val.qty - 1) * val.price }
        }
      }
      return val
    })
    addtoCart(increment)
  }
  const setLogin = () => {
    const findUser = users.find(
      (list) =>
        list.mail === inpemail.trim() &&
        list.pass === inppass &&
        list.previlage === 'user',
    );
    const admin = users.find(
      (list) =>
        list.mail === inpemail.trim() &&
        list.pass === inppass &&
        list.previlage === 'admin',
    );

    if (admin) {      
      setUsermail(admin)
      navigate('/adminmain')
      setAdminlogin(true)
      return 1
    }
    if (findUser) {
      setUsermail(findUser)
      setdisplaylogin(true)
      let userElement = users.find((val) => val.mail === inpemail.trim())
      if (userElement && userElement.carts) {
        addtoCart(userElement.carts)
      }
      navigate('/')
    } else {
      alert('incorrect Email or Password')
      console.log('no way man')
    }
  };
  const validate = (signmail, singpass, singsconfpass, selectedImage ) =>{
     let check = users.find((val)=> val.mail === signmail);
     if (check){
        alert("user is already exist");
     }
     if(!check){
      if(
        validateEmail(signmail) &&
        validatePassword(singpass) &&
        validateCon_pass(singpass, singsconfpass) &&
        selectedImage
      ){
        setUser([
          ...users,
          {
            mail: signmail,
            pass: singpass,
            image: selectedImage,
            previlage: "user",
          },
        ]);
        alert("success");
        navigate("/Login");
      } else {
        alert("faild...");
      }
     }
  };

  return (
    <>
      <Navbarmain
        displaybool={displaybool}
        setSearch={setSearch}
        state={state}
        displaylogin={displaylogin}
        users={users}
        setUser={setUser}
        setUsermail={setUsermail}
        usermail ={usermail}
        cart={cart}
        addtoCart={addtoCart}
        setdisplaylogin={setdisplaylogin}
        adminlogin={adminlogin}
        setShow={setShow}
      />
      <newContext.Provider
        value={{
          items,
          displaybool,
          setDisplaybool,
          setemail,
          setPass,
          setState,
          addtoCart,
          cart,
          incrementqty,
          decrementqty,
          usermail,
          setLogin,
          adminlogin,
          users,
          setUser,
          state
        }}
      > 
        <Routes>
          <Route path="/" element={<Mainhome />} />
          <Route path="/category" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Dog" element={<Dog />} />
          <Route path="/Cat" element={<Cat />} />
          <Route path="/Toy" element={<Toy />} />
          <Route path="/Groom" element={<Groom />} />
          <Route path="/Birds" element={<Birds />} />
          <Route path="/Medicine" element={<Medicine />} />
          <Route path="/Dress" element={<Dress />} />
          <Route path="/Fish" element={<Fish />} />
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route path="/:View" element={<View state={state} />} />
          <Route path="/Signup" element={<Signup validate={validate} />} />
          <Route path="/Product" element={<Product state={state} />} />
          <Route path='/Product/:id' element={<Editproducts  />}  />
          <Route path='/adminmain' element={<AdminMain />} />
          <Route path='/Payment' element={<Payment  />} />
          <Route path='/users' element={<Users users={users} />}  />
          <Route path='/users/:id' element={<Singleuser  />}  />
          <Route path='/Product/addproducts' element={<Addproduct/>}></Route>
        

          <Route
            path="/searchresult"
            element={<SearchPage search={search} />}
          />
          <Route
            path="/Cart"
            element={<Cart cart={cart} setTotal={setTotal} total={total} />}
          />
        </Routes>
      </newContext.Provider>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ display: "flex", flexDirection:"column",alignItems: "center"}}>
        {usermail ? (
          <>
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "3px solid orange"
            }}>
              <img 
                 src={usermail.image}
                 style={{ width: "110px", borderRadius: "50%"}}
                 className='img-fluid'
                 />
            </div>
            <br/>
            <h6>{usermail.mail}</h6>
          </>
        ):(
          <></>
        )}
        </Offcanvas.Body>
      
      </Offcanvas>
      <Footer />
    </>
  )
}


export default Rout
