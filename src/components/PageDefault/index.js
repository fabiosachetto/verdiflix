import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    padding-top: 10px;
    padding-left: 5%;
    padding-right: 5%;
    flex: 1;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>

      <Footer />
    </>
  );
}

export default PageDefault;
