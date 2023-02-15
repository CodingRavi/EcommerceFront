import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
const Container = styled.div``
const ChatLobby = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2]
  console.log(path);
  return (
    <Container>
        <p>{path}</p>
    </Container>
  )
}

export default ChatLobby