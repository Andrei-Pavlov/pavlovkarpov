import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import onepilt from '../assets/onepilt.jpg';
import secondpilt from '../assets/secondpilt.jpg';
import threepilt from '../assets/threepilt.jpeg';

export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel interval={700}>
            <Carousel.Item>
                <img  className='d-block w-100' src={onepilt} alt='one' />
                <Carousel.Caption>
                    <h3>fist image</h3>
                    <p>Lorem Ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={secondpilt} alt='second' />
                <Carousel.Caption>
                    <h3>second image</h3>
                    <p>Lorem Ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={threepilt} alt='three' />
                <Carousel.Caption>
                    <h3>three image</h3>
                    <p>Lorem Ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
  }
}
