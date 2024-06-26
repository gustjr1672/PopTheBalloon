import styled from 'styled-components';

export const SwitchWrapper = styled.div`
  text-align : right;
  width: 95%;
  padding-top: 15px;
`;
export const SwitchContainer = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #73C0FC;
  transition: .4s;
  border-radius: 30px;

  &:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    border-radius: 20px;
    left: 2px;
    bottom: 2px;
    z-index: 2;
    background-color: #e8e8e8;
    transition: .4s;
  }
`;

export const SunIcon = styled.span`
  svg {
    position: absolute;
    top: 6px;
    left: 36px;
    z-index: 1;
    width: 24px;
    height: 24px;
  }
`;

export const MoonIcon = styled.span`
  svg {
    fill: #73C0FC;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;
    width: 24px;
    height: 24px;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #183153;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #183153;
  }

  &:checked + ${Slider}::before {
    transform: translateX(30px);
  }
`;

