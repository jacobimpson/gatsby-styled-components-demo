import React, { Component } from 'react';
import { Tab, TabList, TabPanel } from 'react-tabs';
import { Layout, Body, ProductContainer } from '../components/Layout';
import Price, { PriceWrapper } from '../components/Price';
import StyledTabs from '../components/StyledTabs';
import { product } from '../constants';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
  }

  render() {
    const { title, subtitle, tabs, price } = product;

    return (
      <Layout>
        <Body>
          <ProductContainer>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            {tabs.length && (
              <StyledTabs
                selectedIndex={this.state.tabIndex}
                onSelect={tabIndex => this.setState({ tabIndex })}
              >
                <TabList>
                  {tabs.map(tab => (
                    <Tab key={`tab-${tab.title}`}>{tab.title}</Tab>
                  ))}
                </TabList>
                {tabs.map(tab => (
                  <TabPanel key={`tab-panel-${tab.title}`}>
                    <p>{tab.content}</p>
                  </TabPanel>
                ))}
              </StyledTabs>
            )}
            <PriceWrapper>
              {price.sale && price.sale < price.regular ? (
                <>
                  <Price value={price.sale} />
                  <Price value={price.regular} strike />
                </>
              ) : (
                <Price value={price.regular} />
              )}
            </PriceWrapper>
          </ProductContainer>
        </Body>
      </Layout>
    );
  }
}

export default IndexPage;
