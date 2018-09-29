import { withPrefix } from 'gatsby';
import React, { Component } from 'react';
import { Tab, TabList, TabPanel } from 'react-tabs';
import Button from '../components/Button';
import ColorSelect from '../components/ColorSelect';
import { Body, Layout, ProductContainer } from '../components/Layout';
import Price, { PriceWrapper } from '../components/Price';
import ProductTabs from '../components/ProductTabs';
import { product } from '../constants';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      selectedColor: product.colors[0],
    };
  }

  render() {
    const { title, subtitle, tabs, price, colors } = product;

    return (
      <Layout>
        <Body>
          <ProductContainer>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}

            {tabs.length && (
              <ProductTabs
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
              </ProductTabs>
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

            <ColorSelect
              options={colors}
              defaultValue={colors[0]}
              value={this.state.selectedColor}
              onChange={selectedColor => this.setState({ selectedColor })}
            />

            <img
              src={withPrefix(this.state.selectedColor.image)}
              alt={`Photograph of ${product.title} ${
                this.state.selectedColor.label
              } color variation`}
            />

            <Button onClick={() => console.log('')}>Add To Cart</Button>
          </ProductContainer>
        </Body>
      </Layout>
    );
  }
}

export default IndexPage;
