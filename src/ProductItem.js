import React from 'react';
import ProductImageModal from './ProductImageModal';
import './ProductGrid.css';

class ProductItem extends React.Component {
    #productEndPoint = "/index.json";

    item = {};
    refProductImage;

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.item = props.item;
        this.refProductImage = React.createRef();
    }

    getImageStyle() {
        return {'width': this.item.hero.width, 'height': this.item.hero.height };
    }

    handleShow = (e) => {
        console.log(e.keyCode);
       if(e.keyCode >= 0) {
           if(e.keyCode === 13){
                e.preventDefault();
                this.refProductImage.current.handleShow();
           }
       }else {
          this.refProductImage.current.handleShow();
       }
    }
    //
    render() {
      return (
        <div className="product-item">
            <img onClick={this.handleShow} onKeyDown={this.handleShow} tabIndex="0" alt={(this.item.hero.alt) ? this.item.hero.alt : this.item.name} src={this.item.hero.href} className="product-image" role="link"/>
            <ProductImageModal ref={this.refProductImage} imageList={this.item.images} title={this.item.name}/>
            <div  className="product-name"><a tabIndex="0" href={this.item.links.www}>{this.item.name}</a></div>
            <div  className="product-price">Sale: ${this.item.priceRange.selling.low} - ${this.item.priceRange.selling.high}</div>

        </div>
        )
    }
}

export default ProductItem;