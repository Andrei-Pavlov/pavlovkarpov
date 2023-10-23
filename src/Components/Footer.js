import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Footer extends Component {
  render() {
    return (
        <>
            <Container className='text-center' fluid style={{backgroundColor: '#212529', color: '#fff', height: '30px', position: 'relative', marginTop: '0px', bottom: "0"}}>
                <p>Design &copy; ReelHub Cinema || Andrei Pavlov , Andrei Karpov</p>
            </Container>
        </>
    )
  }
}
