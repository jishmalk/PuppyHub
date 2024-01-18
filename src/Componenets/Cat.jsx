import React, { useContext } from "react";
import { newContext } from "../Rout";
import { Button, Card,Col , Row } from "react-bootstrap";
import './Cat.css';
import { Navigate, useNavigate } from "react-router-dom";
//food
const Cat = ()=>{
    const {items} =useContext(newContext)
    const Catproduct = items.filter((item)=>item.catagory === "Cat")
    const navigate = useNavigate()

    return(
        <>
        <Row className="m-4">
            {Catproduct.map((item)=>(
                <Col key={item.id} xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4">
                    <Card className='card-div' >
                        <Card.Img style={{width: '15rem', height: '10rem'}} variant='top' src={item.img} />
                        <Card.Body>
                            <Card.Title className="m-2">{item.detail}</Card.Title>
                            <Card.Text>
                                {item.price}
                            </Card.Text>
                            <Button variant="outline-success" onClick={()=>navigate(`/${item.id}`)}>
                                view Products
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </>
    )
}
export default Cat