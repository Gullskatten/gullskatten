import styled, {css} from "styled-components";

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const FullHeightContentWrapper = ContentWrapper.extend`
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 0 2rem;
`;

export const CenteredContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  margin: 0 0.5rem;
`;

export const CardContainer = styled.div`
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
  background: #fff;
`;

export const Footer = styled.div`
  bottom: 0;
  margin-right: 10px;
  position: absolute;
  width: 100%;
  display: flex;
  padding-bottom: 1rem;
  ${props =>
    props.centered &&
    css`
      justify-content: center;
      align-items: center;
    `};
  ${props => props.alignRight && css`
   align-items: flex-end;
  `};
`;
