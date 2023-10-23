import React, {useRef} from 'react'
import CarouselBox from '../Components/CarouselBox';
import CardBox from '../Components/CardBox';
import AccordionBox from '../Components/AccordionBox';
import BannerBox from '../Components/BannerBox';
import {Navbar, Nav } from 'react-bootstrap'
import About from '../Components/About'
import Discount from '../Components/Discount'
import Contacts from '../Components/Contacts';
import CardBoxSocial from '../Components/CardBoxSocial'

export default function Home() { 

  const carouselRef = useRef();
  const cardRef = useRef();
  const accordionRef = useRef();
  const bannerRef = useRef();
  const aboutRef = useRef();
  const contactsRef = useRef();
  const discountRef = useRef();
  const socialRef = useRef();

  function carouselClick(){
    carouselRef.current.scrollIntoView({behavior:"smooth"});
  }
//   function cardClick(){
//     cardRef.current.scrollIntoView({behavior:"smooth"});
//   }
//   function accordionClick(){
//     accordionRef.current.scrollIntoView({behavior:"smooth"});
//   }
//   function bannerClick(){
//     bannerRef.current.scrollIntoView({behavior:"smooth"});
//   }

  const scrollToTop =() => {
    window.scrollTo({top:0, behavior:"smooth"});
  };
  
    return (
        <div>
          

          <section ref={carouselRef} className='pt-0'><CarouselBox/></section>
          <section ref={cardRef} className='pt-5'><CardBox/></section>
          <section ref={socialRef} className='pt-5' ><CardBoxSocial/></section>
          <hr style={{height:'20px', borderWidth:'0', color:"gray", backgroundColor:"gray"}}></hr>

          <section ref={accordionRef} className='pt-5'><AccordionBox/></section>
          <section ref={bannerRef} className='pt-3'><BannerBox/></section>
          <section ref={aboutRef} className='pt-5'><About/></section>
          <section ref={discountRef} className='pt-5'><Discount/></section>
          <section ref={contactsRef} className='pt-5' ><Contacts/></section>
          
        </div>
    );
  
}
