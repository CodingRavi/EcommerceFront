import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navebar from "../Components/Navebar";
import Newsletter from "../Components/Newsletter";
import { mobile } from "../responsive";
import {useLocation} from "react-router-dom"
import { useEffect, useState } from "react";
import { publicrequest } from "../requestMethods";
import { useDispatch,useSelector} from "react-redux";
import { addProduct } from "../redux/cartRedux";
// tistify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding:"10px" , flexDirection:"column"})}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"50vh"})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [Product, setProduct] = useState({})
  const [Quantity, setQuantity] = useState(1)
  const [Color, setColor] = useState(null)
  const [Size, setSize] = useState(null)
  useEffect(() => {
   const getProduct = async()=>{
     try {
       const req = await publicrequest.get("/products/find/"+id);
       setProduct(req.data);
     } catch (err) {
       console.log("Error");
     }
   }
   getProduct()
  }, [id])

  const handleQuentity = (e)=>{
    if(e==="dec"){
     Quantity>1 && setQuantity(Quantity-1)
    }else{
      setQuantity(Quantity+1)
    }
  }

  const handleClick=()=>{
    dispatch(addProduct({...Product,Quantity,Color,Size}));
    toast.success("Added Successfully",{
      position: "top-center",
      autoClose: 1000,
    });
  }
  return (
    <Container>
      <Navebar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
          <Image src={Product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{Product.title}</Title>
          <Desc>
          {Product.desc}
          </Desc>
          <Price>$ {Product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {
                Product.color?.map((color)=>(
                  <FilterColor color={color} key={color} onClick={()=>setColor(color)}/>

                ))
              }
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>{setSize(e.target.value)}}>
                {
                  Product.size?.map((size,key)=>(
                    <FilterSizeOption key={key} >{size}</FilterSizeOption>
                  ))
                }
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleQuentity("dec")}/>
              <Amount>{Quantity}</Amount>
              <Add onClick={()=>handleQuentity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
      <ToastContainer />
    </Container>
  );
};

export default Product;