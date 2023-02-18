import { Send } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import { userRequest } from "../requestMethods"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Discription = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
  ${mobile({textAlign:"center"})}

`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
  ${mobile({width:"80%"})}

`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left:20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Error =styled.p`
  color: #217500;
  margin-top: 10px;
`
const Newsletter = () => {
  const [mail, setmail] = useState(null)
  const [mailStatus, setmailStatus] = useState("")
  const  sendMailHandlar =(e)=>{
    e.preventDefault()

    async function sendMail() {
      const data = await userRequest.post("/mail/send", {mail: mail});
      setmailStatus(data.data);
    }
    
    sendMail();
  }
  // console.log(mailStatus);
  return (
    <Container>
        <Title>Newsletter</Title>
        <Discription>Get timely updates from favorite product.</Discription>
        <InputContainer>
            <Input placeholder="Your email" type="email" onChange={(e)=>{setmail(e.target.value)}}/>
            <Button  onClick={sendMailHandlar}> <Send/> </Button>
        </InputContainer>
        {
          mailStatus ? <Error>*{mailStatus}</Error> : <Error>send Currect Mail</Error>
        }
    </Container>
  )
}

export default Newsletter