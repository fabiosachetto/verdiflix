import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    padding-top: 10px;
    padding-left: 5%;
    padding-right: 5%;
    flex: 1;
    ${({ paddingAll }) => css`
    padding: ${paddingAll};
    `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>

      <Footer />
    </>
  );
}

export default PageDefault;
