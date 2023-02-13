import React from 'react';
import styled from "styled-components";
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navebar from '../Components/Navebar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';

const Container = styled.div``;

const Search = () => {
  return (
    <Container>
        <Announcement/>
        <Navebar/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Search