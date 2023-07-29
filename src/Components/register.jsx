import React from 'react'
import styled from 'styled-components'
import book1 from "../assets/undraw_road_to_knowledge_m8s0.svg"

const Register  = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
`
const Wrapper = styled.div`
display: flex;
width:80%;
height: 80%;

`
const Title = styled.h1`
font-weight:300;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
gap: 20px;
margin-top: 50px;
`
const Input = styled.input`
border: 1px solid gray;
outline: none;
padding: 10px;
`

const Submit = styled.button`
border: none;
background-color:#6d99ef;
color: white;
padding: 15px;
`

const Send = styled.button`
border: none;
background-color:#6d99ef;
color: white;
padding: 15px;
`

const Hr = styled.hr`
width: 100%;


`
const Img = styled.img`
height: 200px;
width: 400px;
z-index: 9999;
`


const register = () => {

    const OTP = true;
  return (
    <div>
      <Register>
        <Wrapper>
            <Left>
            <Img src={book1}/>
            </Left>
            <Right>
            <Title>
                Register
             </Title>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Phone Number"/>
               <Send>Send OTP</Send>
                
                  {
                    OTP && (<>
                      <Hr/>
                        <Input placeholder="OTP"/>
                        <Submit>Submit</Submit>
                    </>
                        
                    )
                  }
            </Right>
        </Wrapper>
      </Register>
    </div>
  )
}

export default register
