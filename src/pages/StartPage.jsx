import React from "react";
import styled from "styled-components";
import { BubbleContainer, StyledBubble } from "../styles/Start.style";
import  StartButton  from "../styles/StartBtn.style";
import HelpButton from "../styles/HelpBtn.style";


function StartPage() {

  return (
    <>
    <Container>

      <BubbleContainer>
        <StyledBubble className="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </StyledBubble>
        <StyledBubble className="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </StyledBubble>
        <StyledBubble className="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </StyledBubble>
        <StyledBubble className="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </StyledBubble>
        <StyledBubble className="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </StyledBubble>
      </BubbleContainer>

      <ButtonWrap>
        <StartButton>Game start</StartButton>
        <HelpButton>help</HelpButton>
      </ButtonWrap>

    </Container>
    </>
  );
}

export default StartPage;


const Container = styled.div`
display: flex;
place-items: center;
flex-direction: column;
gap: 150px;
justify-content: center;
min-height: 100vh;
`

const ButtonWrap = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
width:200px;
`