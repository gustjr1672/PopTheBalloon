import React from "react";
import styled from "styled-components";
import { BubbleContainer, StyledBubble } from "../styles/Start.style";
import  StartButton  from "../styles/StartBtn.style";
import HelpButton from "../styles/HelpBtn.style";
import DarkModeBtn from "../components/DarkModeBtn"


function StartPage() {

  return (
    <>
    <Wrap>
      <DarkModeBtn/>
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
          <StartButton to='./game'>Game start</StartButton>
          <HelpButton>help</HelpButton>
        </ButtonWrap>
      </Container>
    </Wrap>
    </>
  );
}

export default StartPage;

const Wrap = styled.div`
min-height: 100vh;
`

const Container = styled.div`
display: flex;
place-items: center;
flex-direction: column;
gap: 150px;
justify-content: center;
margin-top: 150px;
`

const ButtonWrap = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
width:200px;
`