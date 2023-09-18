/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { EmptyTextWrapper, StyledEmptyText } from './empty.text.styled';

export const EmptyText = () => {
  return (
    <EmptyTextWrapper>
      <StyledEmptyText>It's empty here for now ¯\_(ツ)_/¯</StyledEmptyText>
    </EmptyTextWrapper>
  );
};
