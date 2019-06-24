import React from 'react';
import {Modal} from 'react-bootstrap';

import Slider from "react-slick";
import './ProductImageModal.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProductImageModal extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: props.show
        }
      }

    handleClose = () => {
        this.setState({show: false});
    }

    handleShow = () => {
       this.setState({show: true});
    }

    imageThumbnail = (i)  => {
       const image = this.props.imageList[i];
       return (
           <img src={image.href} alt={(image.alt) ? ('Thumbnail ' + image.alt) : ('Image Thumbnail ' + i)} className="product-image-carousel-thumbnail"/>
       );
     }

    render() {
        const settings = {
              customPaging: this.imageThumbnail,
                    dots: true,
                    dotsClass: "product-image-carousel-dots",
                    className: "product-image-carousel-item",
                    adaptiveHeight: true,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
            };
        const isCarousel = (this.props.imageList.length > 1) ? true : false;
        const modalSize = (this.props.imageList.length > 4) ? "lg" : "md";
       return (
            <div>
                <Modal size={modalSize} show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter">
                  <Modal.Header closeButton className="modal-header">
                    <Modal.Title tabIndex="0" className="modal-title">{this.props.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="modal-body">
                      <div className="product-image-carousel">
                      {isCarousel ? (
                      <Slider {...settings}>
                        {this.props.imageList.map( (image, index) => (
                            <img alt={(image.alt) ? image.alt : ('Image  ' + index)} key={'pc-' + index} src={image.href} className="product-image-carousel-self"/>
                        ))}
                      </Slider>
                      ) : (<img alt={(this.props.imageList[0].alt) ? this.props.imageList[0].alt : ('Image of ' + this.props.title )} src={this.props.imageList[0].href} className="product-image-carousel-self"/>)
                      }
                      </div>
                  </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default ProductImageModal;