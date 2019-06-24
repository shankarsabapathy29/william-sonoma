import React from 'react';
import fetch from 'isomorphic-fetch'
import ProductItem from './ProductItem';
import Config from './Config';

import './ProductGrid.css';

class ProductGrid extends React.Component {

    noProductMessage = '';

    constructor(props) {
        super(props);
            this.state = {
              error: null,
              isLoaded: false,
              data: []
            };
        this.noProductMessage = Config.noProductMessage;
    }
    componentDidMount() {
        if(this.props.productEndPoint) {
            fetch(this.props.productEndPoint)
                .then(response => response.json())
                .then((response) => {
                    if(Array.isArray(response.groups) && response.groups.length > 0) {
                        this.setState({
                            isLoaded: true,
                            items: response.groups
                        });
                    }else {
                        this.setState({
                            isLoaded: false,
                            error: this.noProductMessage
                        });
                    }
                },(error) => {
                    this.setState({
                        isLoaded: false,
                        error: this.noProductMessage
                    });
                })
        } else {
            this.setState({
                isLoaded: false,
                error: this.noProductMessage
            });
        }
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div className="error-con"><div className="error-message">{error.message}</div></div>;
        } else if (!isLoaded) {
          return <div className="main-loader"><div className="loader"></div></div>;
        } else {
          return (
            <div className="product-grid">
                {items.map(item => (
                    <ProductItem key={item.id} item={item}/>
                ))}
            </div>
          );
        }
    }
}

export default ProductGrid;