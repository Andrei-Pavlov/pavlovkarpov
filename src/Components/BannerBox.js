import React from 'react'
import { Container } from 'react-bootstrap'


export default function BannerBox() {
  return (
    <Container fluid className='bg-success text-white p-5 opacity-75' style={{backgroundImage:"url(https://wallpapercave.com/wp/wp10282256.jpg)", height: '400', backgroundSize:"cover"}}>
        <Container className='p-5' style={{alignSelf: 'center', justifyContent: 'center'}}>
            <h1>Example hero banner</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <p>
                <button className='primary'>Learn more</button>
            </p>
        </Container>
    </Container>
  )
}
