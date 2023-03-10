import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { sliderItems } from "../Data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display:"none"})}

`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f7f2f2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${propes=>propes.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(propes) => propes.bg};
`;
const ImagContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex,setslideIndex]=useState(0)
  const navigate = useNavigate()
  const handleClick = (direction) => {
    if(direction==="left"){
      setslideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }
    else{
      setslideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  };
  const clickOnSlider = ()=>{
    navigate("/search")
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item) => {
          return(
            <Slide bg={item.bg}  key={item.id}>
            <ImagContainer>
              <Image src={item.img} />
            </ImagContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>
                {item.desc}
              </Desc>
              <Button onClick={clickOnSlider}>Show Now</Button>
            </InfoContainer>
          </Slide>
          )
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
