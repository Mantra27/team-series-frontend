import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sliderItems } from '../Pages/data';
import Flip from 'react-reveal/Flip';

const Container = styled.div`
width: 100%;
height: 60vh;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
position: absolute;
width: 50px;
height: 50px;
background-color: #fff7f7;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50px;
color: teal;
top: 0;
bottom: 0;
left: ${(props)=>props.direction === "left" && "10px"};
right: ${(props)=>props.direction === "right" && "10px"};
margin: auto;
z-index: 2;
cursor: pointer;
`
const Wrapper = styled.div`
display: flex;
height: 100%;
transition: all 1.5s ease;
transform: translateX(${(props)=>props.slide*-100}vw);
`
const Slide = styled.div`
display: flex;
height: 60vh;
width: 100vw;
align-items: center;
background-color: #f0eee2;
user-select: none;
`

const ImgContainer = styled.div`
flex: 1;
padding: 60px;
display: flex;
justify-content: center;
align-items: flex-end;
`
const Img = styled.img`
margin-left: 50px;
height: 40vh;
width: 20vw;

`

const TextContainer = styled.div`
flex: 1;

`
const Title = styled.h1`
font-weight: 900;
color:#${(props)=>props.Tbg};
font-size: 70px;
width: 70%;

`
const Desc = styled.div`
margin: 50px 0px ;
letter-spacing: 3px;
font-size: 20px;
font-weight: 500;
width: 70%;

`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;


`




const Slider = () => {
    const [slide,setSlide] =useState();

    const HandleSlide = (direction)=>{
      if(direction==="left"){
        setSlide(slide>0 ? slide-1:2);
      }
      else{
        setSlide(slide<2 ? slide+1:0)
      }
    }
  return (
      <>
    <Container>

    <Arrow direction="left" onClick={()=>HandleSlide("left")}>
        <ArrowBackIosNewIcon/>
    </Arrow>
    <Wrapper slide={slide}>
    {sliderItems.map((item)=>(
        <Slide bg={item.bg}>
  
        <ImgContainer>
            <Img
              src={item.img}
            />
            </ImgContainer>

      
        <TextContainer>
             <Title Tbg={item.TitleBg}>
            {item.title}
             </Title>
             <Desc>
            {item.Desc}
             </Desc>
             <Button>
            Know more
             </Button>
            </TextContainer>
  
      
        </Slide>
    ))}
       
    </Wrapper>
    <Arrow direction="right" onClick={()=>HandleSlide("right")}>
        <ArrowForwardIosIcon/>
    </Arrow>

    </Container>
    </>
  )
}
export default Slider
