import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

interface Props {
    text: string;
    to?: string;
    tittle?: string;
}

export const Btn = (props:Props) => (
    props.to
    ? <Link to={props.to} title={props.tittle}><BtnStyle>{props.text}</BtnStyle></Link>
    : <BtnStyle>{props.text}</BtnStyle>
);

const BtnStyle = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.green};
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: 1rem;
  padding: 0.28rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;