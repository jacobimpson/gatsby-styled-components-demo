import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { theme, breakpoints } from '../constants';

const Body = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${theme.bodyColor};

  @media (min-width: ${breakpoints.sm}px) {
    align-items: center;
    padding: 2rem;
  }
`;

const ProductContainer = styled.article`
  background: #fff;
  padding: 2rem;
`;

const IndexPage = () => (
  <Layout>
    <Body>
      <ProductContainer>
        <h1>Audio-Technica ATH-MDR7</h1>
        <h2>2017 Best Headphones of the Year Award Winner</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quas nam
          pariatur saepe veniam totam ex! Id, suscipit delectus, facere sapiente
          fugiat hic cum incidunt quos labore quam quas consequatur.
        </p>
      </ProductContainer>
    </Body>
  </Layout>
);

export default IndexPage;
