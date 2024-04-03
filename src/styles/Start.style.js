import styled, { keyframes } from "styled-components";

const animate4010 = keyframes`
  0%, 100% {
    transform: translateY(-20px);
  }

  50% {
    transform: translateY(20px);
  }
`;

export const BubbleContainer = styled.div`
  position: relative;
  // height: 500px;
`;

export const Bubble = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.25);
  animation: ${animate4010} 3s ease-in-out infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: #fff;
    z-index: 10;
    filter: blur(2px);
  }

  &::before {
    top: 50px;
    left: 45px;
    width: 30px;
    height: 30px;
  }

  &::after {
    top: 80px;
    left: 80px;
    width: 20px;
    height: 20px;
  }

  & > span {
    position: absolute;
    border-radius: 50%;
    filter: blur(6px);
  }

  & > span:nth-child(1) {
    inset: 10px;
    border-left: 15px solid #0fb4ff;
  }

  & > span:nth-child(2) {
    inset: 10px;
    border-right: 15px solid #ff4484;
  }

  & > span:nth-child(3) {
    inset: 10px;
    border-top: 15px solid #ffeb3b;
  }

  & > span:nth-child(4) {
    inset: 30px;
    border-left: 15px solid #ff4484;
    filter: blur(12px);
  }

  & > span:nth-child(5) {
    inset: 10px;
    border-bottom: 10px solid #fff;
    transform: rotate(330deg);
  }
`;

export const StyledBubble = styled(Bubble)`
  &.bubble:nth-child(2) {
    position: relative;
    zoom: 0.50;
    left: -200px;
    top: -100px;
    animation-delay: -4s;
  }

  &.bubble:nth-child(3) {
    position: relative;
    zoom: 0.35;
    right: -150px;
    top: -500px;
    animation-delay: -6s;
  }

  &.bubble:nth-child(4) {
    position: relative;
    zoom: 0.35;
    left: -200px;
    bottom: -50px;
    animation-delay: -3s;
  }

  &.bubble:nth-child(5) {
    position: relative;
    zoom: 0.5;
    left: -50px;
    top: 90px;
    animation-delay: -5s;
  }
`;
