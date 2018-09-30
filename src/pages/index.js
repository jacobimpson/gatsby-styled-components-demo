import { withPrefix } from 'gatsby';
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Tab, TabList, TabPanel } from 'react-tabs';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import ColorSelect from '../components/ColorSelect';
import { Layout } from '../components/Layout';
import { ProductBody, ProductContainer } from '../components/Layout/Product';
import Price, { PriceWrapper } from '../components/Price';
import ProductTabs from '../components/ProductTabs';
import { breakpoints, product } from '../constants';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingToCart: false,
      addedToCart: false,
      buttonText: 'Add to cart',
      selectedColor: product.colors[0],
      tabIndex: 0,
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
        <ProductBody>
          <ProductContainer>
            <div>
              <div className="product__back">
                <BackButton href="/" label="All products" />
              </div>
              <div className="product__title-wrapper">
                <h1>{title}</h1>
                {subtitle && <h2>{subtitle}</h2>}
              </div>
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
              <PriceWrapper className="product__price-wrapper">
                {price.sale && price.sale < price.regular ? (
                  <>
                    <Price value={price.sale} />
                    <Price value={price.regular} strike />
                  </>
                ) : (
                  <Price value={price.regular} />
                )}
              </PriceWrapper>
              <div className="product__color-select">
                <ColorSelect
                  options={colors}
                  defaultValue={colors[0]}
                  value={this.state.selectedColor}
                  onChange={selectedColor => this.setState({ selectedColor })}
                />
              </div>
              <MediaQuery maxWidth={`${breakpoints.md - 1}px`}>
                <img src={activeImageSrc} alt={activeImageAlt} />
              </MediaQuery>
              <div className="product__add-to-cart">
                <Button
                  isLoading={this.state.addingToCart}
                  onClick={() => {
                    if (this.state.addedToCart) {
                      NotificationManager.info('No cart in this demo, sorry!');
                      return;
                    }

                    this.setState({ addingToCart: true });
                    setTimeout(
                      () =>
                        this.setState(
                          {
                            buttonText: 'View Cart',
                            addingToCart: false,
                            addedToCart: true,
                          },
                          () => NotificationManager.success('Added to cart')
                        ),
                      2000
                    );
                  }}
                >
                  {this.state.addingToCart ? 'Loading' : this.state.buttonText}
                </Button>
              </div>
            </div>
            <MediaQuery minWidth={`${breakpoints.md}px`}>
              <div className="product__column-right">
                <img src={activeImageSrc} alt={activeImageAlt} />
              </div>
            </MediaQuery>
          </ProductContainer>
        </ProductBody>
        <NotificationContainer />
      </Layout>
    );
  }
}

export default IndexPage;
