import React, { Component } from "react";
import { CircularWrapper } from "./Common";
import Particles from 'react-particles-js';
import particleOptions from '../assets/particle-options';
import {
  CenteredContainer,
  FullHeightContentWrapper,
  Footer
} from "./Containers";

import { TitleHuge } from "./StyledTitles";
import { StyledMessage } from "./StyledMessages";
import { Shadow } from "./Shadow";
import styled from "styled-components";

const TitleWrapper = styled.div`
  @media all and (max-height: 200px) {
    display: none;
  }
`;

const ColumnedFlexWrapper = styled.div`
  display: grid;
  grid-auto-columns: 100%;
  grid-row-gap: 1em;
`;

const ShadowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;


export default class Home extends Component {
  render() {
    return (
      <FullHeightContentWrapper>
        <Particles style={{position: "absolute"}} params={particleOptions} />
        <CenteredContainer>
          <ColumnedFlexWrapper>
            <TitleWrapper>
              <CircularWrapper huge gradient floating>
                <TitleHuge larger white alternative tight>
                  Gullskatten
                </TitleHuge>
                
              </CircularWrapper>
            </TitleWrapper>
            <ShadowWrapper>
              <Shadow />
            </ShadowWrapper>
          </ColumnedFlexWrapper>
        </CenteredContainer>
        <Footer centered>
          <StyledMessage white secondAlternative small withIconRight>
            This site is under development <span style={{ fontSize: "0.8rem" }} aria-label="sweat" role="img">
          💙
            </span> <StyledMessage white bold> - Espen</StyledMessage>
          </StyledMessage>
        </Footer>
      </FullHeightContentWrapper>
    );
  }
}
