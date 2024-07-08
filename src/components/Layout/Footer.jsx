import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    let today = new Date()

  return (
    <div>
        <footer className='by-dark text-light py-3 footer mt-lg-5 bg-dark'>
            <Container>
                <Row>
                    <Col xs={12} md={12} className='text-center'>
                        <p>{today.getFullYear()} MH-Hotel</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default Footer