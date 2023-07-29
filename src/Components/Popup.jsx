import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(143, 142, 142, 0.42);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`


const Wrapper = styled.div`
    height: 90vh;
    width: 50vw;
    background-color:#E5E5DB;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

`

const Title = styled.h1`
    font-size: 30px;
    font-weight: 900;
    color: #6d99ef;
    text-align: center;

    `
const BTitle = styled.h3`
    font-size: 20px;
    font-weight: 900;
    color: #6d99ef;
    text-align: center;

`
const Input = styled.input`
    border: 1px solid gray;
    outline: none;
    padding: 10px;
  

`
const Selector = styled.select`

`
const Option = styled.option`

`

const Button = styled.button`
border: none;
background-color:#6d99ef;
color: white;
padding: 15px;
margin: 10px;

`
const Cross = styled.div`
position: absolute;
top: 20px; 
right: 20px;
`



const Popup = ({open}) => {
  return (
     <Container>
     <Wrapper>
            <Cross  onClick={(e)=>open(false)}>
                <CloseIcon />
            </Cross>
            <Title>Add new Book</Title>
            <BTitle>Book Name</BTitle>
            <Input placeholder="Book Name" />
            <BTitle>Author Name</BTitle>
            <Input placeholder="Author Name" />
            <BTitle>Book Genre</BTitle>
            <Input placeholder="Genre" />
            <BTitle>Book Description</BTitle>
            <Input placeholder="Description" />
            <BTitle>Book Price</BTitle>
            <Input placeholder="₹" />
            <BTitle>Sell or Rent</BTitle>
            <Selector>
                <Option>Sell</Option>
                <Option>Rent</Option>
            </Selector>
           <Button>
            Add Book
           </Button>
     </Wrapper>

     </Container>
  )
}

export default Popup
