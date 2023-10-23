import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap';

export default class Contacts extends Component {
  render() {
    return (
        <Container>
            <h1 style={{textAlign: 'center', marginTop: "100px"}}>Contact us</h1>
            <div class="mb-3" >
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <Button variant='primary' style={{marginBottom:"463px"}}>Submit</Button>
        </Container>
    );
  }
}
