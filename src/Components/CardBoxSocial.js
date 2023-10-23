import React, { Component } from 'react';
import { Button, CardGroup, Container, CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import cardTextSocial from '../Data/cardtextSocial.json';

export default class CardBox extends Component {
  render() {
    return (
      <div>
        <Container>
            <h2 className='text-center m-4'>Our Social  </h2>
            <CardGroup>
                <Card className='m-2' key='0'>
                    <Card.Img variant='top' src='https://public.superjob.ru/images/clients_logos.ru/319385_40ce79336fd225641eace35454fe1b3d.png' />
                    <CardBody>
                        <Card.Title>VK</Card.Title>
                        <Card.Text>Our VK</Card.Text>
                        <Link to='/'>
                            <Button variant='primary'>Button</Button>
                        </Link>
                    </CardBody>
                </Card>
                {cardTextSocial.map((data,key) => (
                    <Card className='m-2' key={key}>
                        <Card.Img variant='top' src={data.image} />
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>{data.text}</Card.Text>
                            <Link to={data.link}>
                                <Button variant='primary'>{data.caption}</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
        </Container>
      </div>
    )
  }
}
