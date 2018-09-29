import { withPrefix } from 'gatsby';
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Tab, TabList, TabPanel } from 'react-tabs';
import Button from '../components/Button';
import ColorSelect from '../components/ColorSelect';
import { Body, Layout, ProductContainer } from '../components/Layout';
import Price, { PriceWrapper } from '../components/Price';
import ProductTabs from '../components/ProductTabs';
import { breakpoints, product } from '../constants';

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
    const { selectedColor } = this.state;
    const activeImageSrc = withPrefix(selectedColor.image);
    const activeImageAlt = `${product.title} ${
      selectedColor.label
    } Color Variation`;

    return (
      <Layout>
        <Body>
          <ProductContainer>
            <div className="column column--left">
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

              <MediaQuery maxWidth={`${breakpoints.md - 1}px`}>
                <img src={activeImageSrc} alt={activeImageAlt} />
              </MediaQuery>

              <Button onClick={() => {}}>Add To Cart</Button>
            </div>

            <MediaQuery minWidth={`${breakpoints.md}px`}>
              <div className="column column--right">
                <img src={activeImageSrc} alt={activeImageAlt} />
              </div>
            </MediaQuery>
          </ProductContainer>
        </Body>
      </Layout>
    );
  }
}

export default IndexPage;
