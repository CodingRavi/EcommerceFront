import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import Logo from "../Images/logo.png"
const Container =styled.div`
    width: 100vw;
    height: 100vh;
    background-color:black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

`
const JoinContainer = styled.div`
    width: 400px;
    min-height: 300px;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const LogoImg = styled.img`
    width: 70px;
`
const Heading = styled.h1`
    font-size: 20px;
    margin: 20px;
`
const Hr = styled.hr`
    width: 50%;
    margin-bottom: 20px;
`
const InputName = styled.input`
    width: 50%;
    height: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    padding-left: 10px;
`
const JoinBtn = styled.button`
    width: 100px;
    height: 30px;
    outline: none;
    border: none;
    cursor: pointer;    
    background-color: teal;
    margin: 20px;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const JoinHome = () => {
    const navigate = useNavigate()
    const [name, setName] = useState(null)
    const nameSubmitHandlar=()=>{
        navigate(`/chatlobby/${name}`)
    }
    // console.log(name);
  return (
    <Container>
        <JoinContainer>
            <LogoImg src={Logo}/>
            <Heading>Drop Wall Support</Heading>
            <Hr/>
            <InputName placeholder='Enter Your Name ...' onChange={(e)=>setName(e.target.value)}/>
            <JoinBtn onClick={nameSubmitHandlar}>Join Now</JoinBtn>
        </JoinContainer>
    </Container>
  )
}

export default JoinHome