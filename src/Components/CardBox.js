import React, { Component } from 'react';
import { Button, CardGroup, Container, CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import cardText from '../Data/cardtext.json';

export default class CardBox extends Component {
  render() {
    return (
      <div>
        <Container>
            <h2 className='text-center m-4'>Our team   </h2>
            <CardGroup>
                <Card className='m-2' key='0'>
                    <Card.Img variant='top' src='https://images.pexels.com/photos/14264362/pexels-photo-14264362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    <CardBody>
                        <Card.Title>Cards</Card.Title>
                        <Card.Text>Lorem ipsum</Card.Text>
                        <Link to='/'>
                            <Button variant='primary'>Button</Button>
                        </Link>
                    </CardBody>
                </Card>
                {cardText.map((data,key) => (
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
