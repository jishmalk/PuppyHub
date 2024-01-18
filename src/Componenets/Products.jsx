import React, { useContext } from 'react'
import { newContext } from '../Rout'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from 'react-router-dom';

function Products() {
  const { items } = useContext(newContext)
  const navigate = useNavigate()
  return (
    <div>
    <div className="container">
        <div className='row'>
      {items.map((item) => (
        <div className='col-4'>
        <Card style={{ width: '200px' }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.detail}
          </Card.Text>
          <Button variant="outline-success" onClick={()=>navigate(`/${item.id}`)}>view product</Button>
        </Card.Body>
      </Card>
      </div>
      ))}
      </div>
    </div>
    </div>
  )
}


export default Products
