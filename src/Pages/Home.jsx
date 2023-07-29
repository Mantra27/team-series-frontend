import React from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Navbar from '../Components/Navbar';

const Container = styled.div``;


const Home = () => {
  return (
    <div>
    <Container>

      <Announcement/>
      <Navbar/>
    </Container>
    </div>
  )
}

export default Home
