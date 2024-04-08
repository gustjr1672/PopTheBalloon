import styled , { keyframes } from "styled-components";

const rainbowBorder = keyframes`
5% {  box-shadow: -7px -7px 20px 5px #f78d8d57;}
16% {  box-shadow: 7px -7px 20px 5px #ffa50057;}
30% {  box-shadow: -7px 9px 20px 5px #ffff0057;}
50% {  box-shadow: 7px 7px 20px 5px #45f74557;}
66% {  box-shadow: -7px 7px 20px 5px #7070f357;}
83% {  box-shadow: -7px -7px 20px 5px #bb71f157;}
96% {  box-shadow: 7px -7px 20px 5px #ee82ee57;}
`
export const RainbowBorderCanvas = styled.canvas`
  border-radius: 40px;
  animation: ${rainbowBorder} 8s linear infinite;
  box-shadow: 0 0 20px 5px #e9b4f285;
`;