import { Facebook, FmdGood, Instagram, MailOutline, Phone, Pinterest, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import logo from "../Images/logo.png";
import { mobile } from "../responsive";
import {Link} from "react-router-dom"
const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.img`
  width: 50px;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(propes) => propes.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:"none"})}

`;
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "#fffafa"})}


`;
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const JoinBtm = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  background-color: teal;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src={logo}></Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          alias! Commodi necessitatibus ab error itaque? Voluptatum consequuntur
          maxime eum id?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title>Useful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man Fashion</ListItem>
              <ListItem>Woman Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
             <FmdGood style={{marginRight:"10px"}}/> Bijauli, Aurangabad (Bihar) 
          </ContactItem>
          <ContactItem>
             <Phone style={{marginRight:"10px"}}/> +91 8877 8313 44
          </ContactItem>
          <ContactItem>
             <MailOutline style={{marginRight:"10px"}}/> codingRavi@gmail.com
          </ContactItem>
          <ContactItem>
             <Link to="/customer/join">
             <JoinBtm> Join Support </JoinBtm>
             </Link>
          </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
