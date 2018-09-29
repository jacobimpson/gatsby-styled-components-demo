import React, { Component } from 'react';
import { Tab, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { breakpoints, theme } from '../constants';

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

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
  }

  render() {
    return (
      <Layout>
        <Body>
          <ProductContainer>
            <h1>Audio-Technica ATH-MDR7</h1>
            <h2>2017 Best Headphones of the Year Award Winner</h2>

            <StyledTabs
              selectedIndex={this.state.tabIndex}
              onSelect={tabIndex => this.setState({ tabIndex })}
            >
              <TabList>
                <Tab>Description</Tab>
                <Tab>Details</Tab>
              </TabList>
              <TabPanel>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo ex voluptatum adipisci dicta, libero laborum
                  quisquam error. Saepe iste officia tempora distinctio, atque,
                  suscipit mollitia ab perferendis debitis blanditiis quas.
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  autem ea beatae, libero perspiciatis, aperiam fuga ratione
                  inventore nemo nam maxime explicabo, minima impedit sit
                  laudantium voluptatem reiciendis accusamus dolores!
                </p>
              </TabPanel>
            </StyledTabs>
          </ProductContainer>
        </Body>
      </Layout>
    );
  }
}

export default IndexPage;
