/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Triangle } from 'react-loader-spinner';
import { LoaderWrapper } from './loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Triangle
        height="80"
        width="80"
        color="#5c7bcf"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible
      />
    </LoaderWrapper>
  );
};
