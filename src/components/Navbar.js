import React, { Component } from "react";
import styled, { css } from "styled-components";
import ThemeContainer from "../containers/ThemeContainer";

import { Subscribe } from "unstated";

const CircularOption = styled.div`
  height: 25px;
  width: 25px;
  margin: 0 3px;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  background-image: linear-gradient(
    to top,
    ${props => props.backgroundTop} 0%,
    ${props => props.backgroundBottom} 100%
  );

  ${props =>
    props.selected &&
    css`
      border: 2px solid #fff;
    `};
`;

const Empty = styled.div``;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${props =>
    props.centered &&
    css`
      width: 100%;
      align-items: center;
    `};
`;
export default class Navbar extends Component {
  renderOptions = (selectedTheme, themes, changeTheme) => {
    return themes.map((theme, idx) => {
      return (
        <CircularOption
          selected={selectedTheme.key === theme.key}
          key={idx}
          backgroundTop={theme.backgroundTop}
          backgroundBottom={theme.backgroundBottom}
          onClick={() => changeTheme(theme)}
        />
      );
    });
  };

  render() {
    return (
      <Subscribe to={[ThemeContainer]}>
        {({ state, changeTheme }) => {
          return (
            <FlexWrapper>
              <Empty/>
            </FlexWrapper>
          );
        }}
      </Subscribe>
    );
  }
}
