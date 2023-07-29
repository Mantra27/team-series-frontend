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
  
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState(false)

  const otpSent = () => {
    axios.post("http://localhost:8081/api/send-otp", {
      phone: phone,
    }).then((result)=>{
      console.log(result.data);
      localStorage.setItem("otpToken", result.data.token);
      setStatus(true);
    })
  };

  const submit = ()=>{
    const otpToken = localStorage.getItem("otpToken");
    axios.post("http://localhost:8081/auth/register", {
      username: username,
      email: email,
      password: password,
      contactNumber: phone,
      otp: otp,
      otpToken: otpToken,
    }).then((result)=>{
      console.log({result})
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
                Register

             </Title>
             <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
               <Send onClick={otpSent}>Send OTP</Send>
                  {
                    status && (<>
                      <Hr/>
                      <Input
                        placeholder="OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                        <Submit onClick={submit}>Submit</Submit>
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

