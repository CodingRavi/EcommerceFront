import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Search from "./pages/Search";
import JoinHome from "./pages/JoinHome";
import ChatLobby from "./pages/ChatLobby";
import LodingProduct from "./Components/LodingProduct";
const App = () => {
  const user = useSelector(state=>state.user.currentUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={user?<Home/>:<Login/>} />
        <Route path="/register" element={user?<Home/>:<Register />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/customer/join" element={<JoinHome/>}></Route>
        <Route path="/chatlobby/:name" element={<ChatLobby/>}></Route>
      </Routes>
    </>
  );
};
export default App;
