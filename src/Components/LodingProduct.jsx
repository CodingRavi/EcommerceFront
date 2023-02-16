import React from 'react'
import ReactLoading from 'react-loading';
import styled from "styled-components";

const Container = styled.div`
    width: 350px;
    height: 350px;
    background-color: #e7e7e7;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LodingProduct = () => {

    const lodingDetails = {
        type:"spin",
        color:"#ffffff",
        height:"90%",
        width:"90%",
    }
  return (
    <Container>
        <ReactLoading type={lodingDetails.type} color={lodingDetails.color} height={lodingDetails.height} width={lodingDetails.width} />
    </Container>
  )
}

export default LodingProduct