import React, { useContext, useEffect, useReducer } from "react";
import { newContext } from "../../Rout";
import { Button, Card, Dropdown, DropdownButton } from "react-bootstrap";
// import DropdownButton from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


function reducer(stat, action){
    switch (action.payload){
        case 1:
            return {...stat, ctg: action.value };

        case 2:
            return {...stat, ctg: action.value};
        default:
            return stat;
    }
}

function Product(){
    const {state, setState,adminlogin } = useContext(newContext);
    
    const [ctgory, dispatch] = useReducer(reducer, {ctg:"cat"});

    useEffect(()=>{console.log(state)}, [state])
    const navigate = useNavigate()

    return(
        <div style={{ marginTop: "70px" ,paddingBottom:"20px",paddingTop:"20px",backgroundColor:"lightblue"}}>
        {adminlogin?<><div className="container">
          <div className="d-flex" style={{justifyContent:"flex-end"}}>
            <DropdownButton
              variant="light"
              id="dropdown-basic-button"
              title="Select catagory"
              style={{ marginBottom: "20px"}}
            >
              <Dropdown.Item
                onClick={() => dispatch({ value: "Dog", payload: 1 })}
              >
                Dog
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => dispatch({ value: "Cat", payload: 2 })}
              >
                Food
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => dispatch({ value: "Toy", payload: 1 })}
              >
                Toy
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => dispatch({ value: "Medicine", payload: 1 })}
              >
                Medicine
              </Dropdown.Item>
              {/* <Dropdown.Item>Something else</Dropdown.Item> */}
            </DropdownButton>

          </div>
          <div className="row">
            {state?.map((val) => {
              if (val.catagory === ctgory.ctg) {
                return (
                  <>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
                      <Link to={`/Product/${val.id}`} style={{ textDecoration: "none" }}>
                        <Card
                          style={{ height: "340px", overflow: "hidden" }}
                          key={val.id}
                        >
                          <Card.Img
                            variant="top"
                            src={val.img}
                            style={{ height: "150px", width: "140px" }}                        />
                          <Card.Body>
                            <Card.Title>{val.name}</Card.Title>
                            <Card.Text>
                              {val.detail}
                              <br />
                              <h5 className="h5-cat" style={{ color: "blue" }}>
                                ₹{val.price}
                              </h5>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
        <Button
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "25%",
            fontSize: "50px",
            position: "fixed",
            right: "30px",
            bottom: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom:"10px"
          }}
          onClick={() => navigate("/Product/addproducts")}
        >
          +
        </Button></>:<h1 style={{color:"red",textAlign:"center"}}>Access Denied</h1>}
      </div>
    );
}
export default Product;