import React from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import { Slide } from '@mui/material';
import Slider from '../Components/Slider';
import Categories from '../Components/categories';
import Footer from '../Components/footer';


const Container = styled.div``;


const Home = () => {
  return (
    <div>
    <Container>

      <Announcement/>
      <Navbar/>
        <Slider/>
 <Categories/>
 <Footer/>
    </Container>
    </div>
  )
}

export default Home
