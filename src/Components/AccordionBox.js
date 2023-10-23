import React, { Component } from 'react'
import programList from '../Data/program.json'
import {Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

export default class AccordionBox extends Component {
  render() {
    return (
      <Container className='mt-5'>
        <Row>
          <Col md={{span:8, offset:2}}>
            <h2>FAQ</h2>
            <Accordion defaultActiveKey='1'>
              {programList.map((data)=>(
                <Accordion.Item eventKey={data.id} key={data.id}>
                  <Accordion.Header>
                    {data.name} #{data.id}
                  </Accordion.Header>
                  <Accordion.Body>{data.description}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    )
  }
}
