import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../Images/logo.png";
import { logout} from "../redux/apiCalls";
import { addSearchProduct } from "../redux/SearchRedux";
import { publicrequest } from "../requestMethods";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  caret-color: #555555;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.img`
  width: 55px;
  ${mobile({ width: "40px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navebar = () => {
  const [search, setSearch] = useState(null)
  const quantity = useSelector(state => state.cart.quantity);
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(addSearchProduct(search));
  }, [search])

  const logHandlar = (v)=>{
    if(v==="logout"){
      logout(dispatch);
    }
    else if (v==="register"){
      navigate("/register")
    }
    else if (v==="login"){
      navigate("/login")
    }
  }

  const clickSerchBox =()=>{
    navigate("/search")
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer onClick={clickSerchBox}>
            <Input placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo src={logoImg} />
        </Center>
        <Right>
          {
            user ? <MenuItem onClick={()=>logHandlar("logout")}>LogOut</MenuItem> : 
            <> 
            <MenuItem onClick={()=>logHandlar("register")}>REGISTER</MenuItem>
            <MenuItem onClick={()=>logHandlar("login")}>SIGNIN</MenuItem>
            </>
          }
           
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navebar;
