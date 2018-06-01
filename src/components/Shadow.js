import styled from "styled-components";
import { scale } from "../utils/CommonAnimations";

export const Shadow = styled.div`
  background: ${props => props.theme.shadow};
  border-radius: 50%;
  animation: ${scale} 1.5s cubic-bezier(.38,0,.85,.98) infinite;
  height: 10px;
  width: 180px;

  @media all and (max-width: 700px) {
    width: 120px;
  }

  @media all and (max-height: 400px) {
    display: none;
  }
`;
