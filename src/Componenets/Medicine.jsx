import React, { useContext } from "react";
import { newContext } from "../Rout";
import { Button, Card , Col ,Row } from "react-bootstrap";
import { Navigate, useNavigate } from 'react-router-dom';
import './Medicine.css';

const Medicine =()=>{
    const {items} = useContext(newContext)
    const Medicineproduct = items.filter((item)=>item.catagory === 'Medicine')
    const navigate = useNavigate()
    
  return(
    <>
    <Row className='m-4'>
      {Medicineproduct.map((item) => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={3} xl={3} className='mb-4'>
          <Card className='card-div' >
            <Card.Img style={{ width: '15rem', height: '10rem' }} variant='top' src={item.img} />
            <Card.Body>
              <Card.Title className='m-2'>{item.detail}</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant='outline-success'  onClick={()=>navigate(`/${item.id}`)}>
                View Product
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
)
}
export default Medicine
