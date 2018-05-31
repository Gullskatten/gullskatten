import styled, { css } from "styled-components";
import { float } from "../utils/CommonAnimations";

export const CircularWrapper = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 50%;
  background: ${props => props.theme.dark};
  color: #fff;

  ${props =>
    props.huge &&
    css`
      height: 300px;
      width: 300px;

      @media all and (max-width: 700px) {
        height: 240px;
        width: 240px;
      }
    `};

  ${props =>
    props.gradient &&
    css`
      background-image: linear-gradient(
        to top,
        ${props => props.theme.darkest} 0%,
        ${props => props.theme.dark} 100%
      );
    `};
  ${props =>
    props.darkest &&
    css`
      background: ${props => props.theme.darkest};
    `};
  ${props =>
    props.dark &&
    css`
      background: ${props => props.theme.dark};
    `};
  ${props =>
    props.normal &&
    css`
      background: ${props => props.theme.normal};
    `};
  ${props =>
    props.light &&
    css`
      background: ${props => props.theme.light};
    `};
  ${props =>
    props.lightest &&
    css`
      background: ${props => props.theme.lightest};
    `};

  ${props =>
    props.toDarkest &&
    css`
      &:hover {
        transition: background 0.25s ease-in-out;
        background: ${props => props.theme.darkest};
      }
    `};
  ${props =>
    props.toDark &&
    css`
      &:hover {
        transition: background 0.25s ease-in-out;
        background: ${props => props.theme.dark};
      }
    `};
  ${props =>
    props.toNormal &&
    css`
      &:hover {
        transition: background 0.25s ease-in-out;
        background: ${props => props.theme.normal};
      }
    `};
  ${props =>
    props.toLight &&
    css`
      &:hover {
        transition: background 0.25s ease-in-out;
        background: ${props => props.theme.light};
      }
    `};
  ${props =>
    props.toLightest &&
    css`
      &:hover {
        transition: background 0.25s ease-in-out;
        background: ${props => props.theme.lightest};
      }
    `};

  ${props =>
    props.floating &&
    css`
      animation: ${float} 2s cubic-bezier(0.38, 0, 0.85, 0.98) infinite;
    `};
`;
