import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Mainhome.css'

const Mainhome = () => {

    const setNavigate = useNavigate()

  return (
    <section className='main__section'>
        <div className='hero__section'>
        <Container>
          <Row>
          {/* <p className='hero__subtitle'>Trending Product in year 2024</p> */}
            <Col lg='6' md='5'>
              <div className='hero__content'>
                
                <h2>Fur-ever Fabulous</h2>
                <p>Unleash the Love! Your One-Stop Pet Shop for Tail-Wagging Happiness.<br /> Explore Sniff, Play  Because Every Pet Deserves the Best!</p>
                <motion.button whileHover={{ scale: 1.1 }} className='buy__btn' onClick={() => setNavigate('/products')}>SHOP NOW</motion.button>
              </div>
            </Col>
            <Col lg='6' md="6">
                
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    
      
  )
}

export default Mainhome
