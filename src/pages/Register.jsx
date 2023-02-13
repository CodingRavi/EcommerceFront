import { useState } from "react";
import styled from "styled-components";
import { publicrequest } from "../requestMethods";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile  ({width:"75%"})}

`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
`;
const Error = styled.span`
  color: red;
  margin-left: 10px;
  margin-top: 10px;
` 
const Register = () => {
  const [user, setUser] = useState({});
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const handleClick =(e)=>{
    e.preventDefault()
    console.log(firstname,lastname,username,email,password,confirmpass);
    if(firstname && lastname && username && email && password && confirmpass){
      setError("::Ok::");
      if(password !== confirmpass){
        setError("password not match")
      }
      else{
        console.log("sb ok hai");
        setUser({username,email,password})
        const res = publicrequest.post("/auth/register",user);
        console.log(res);

      }
    }
    else{
      setError("Something wents Wrong")
    }
    console.log(error);
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name"  onChange={(e)=>setFirstname(e.target.value)}/>
          <Input placeholder="last name"  onChange={(e)=>setLastname(e.target.value)}/>
          <Input placeholder="username"  onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="email"  type="email"  onChange={(e)=>setEmail(e.target.value)}/>
          <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Input placeholder="confirm password" type="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
          {
          error && <Error>{error}</Error>
          }

        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
