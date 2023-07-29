import React from 'react'
import styled from 'styled-components'
import book1 from "../assets/undraw_road_to_knowledge_m8s0.svg"
import axios from "axios";
import GoogleAuth from "./Google";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  
  if(localStorage.token){
    console.log("token already exists")
    setTimeout(()=>{
      navigate("/cart")
    }, 200)
  };
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = ()=>{
    const otpToken = localStorage.getItem("otpToken");
    axios.post("http://localhost:8081/auth/login", {
      email: email,
      password: password,
    }).then((result)=>{
      console.log({result});
      localStorage.setItem("token", result.data.token);
      if(localStorage.token){
        console.log("token already exists")
        setTimeout(()=>{
          navigate("/cart")
        }, 200)
      };
    })
  };

  return (
    <div>
      <Register>
        <Wrapper>
            <Left>
            <Img src={book1}/>
            </Left>
            <Right>
            <GoogleAuth/>
or
            <Title>
                LOgin

             </Title>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
                <Submit onClick={submit}>Submit</Submit>
            </Right>
        </Wrapper>
      </Register>
    </div>
  )
}

export default register

