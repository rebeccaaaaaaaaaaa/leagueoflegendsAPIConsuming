import React from 'react';
import {ButtonArea} from './style';

export default function BackButton(props) {
  return  <ButtonArea  onClick={props.closeDetails}> voltar </ButtonArea>;
}
