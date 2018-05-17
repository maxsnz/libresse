import React, { Component } from 'react';
import '../css/page-product.css';

class PageProduct extends Component {

  render() {
    return (
      <div className="page page_product">
        <div className="cases"></div>
        <div className="text"><span className="color-pink">Не останавливайся </span><br />на достигнутом, <br /><span className="color-pink">вперёд вместе </span><br />с Libresse!</div>
        <div className="clickable" onClick={this.props.onClick}></div>
        <div className="socials">
          <div className="social social_vk">vk</div>
          <div className="social social_insta">insta</div>
          <div className="social social_fb">fb</div>
        </div>
        <div className="again" onClick={this.props.onPlayAgain}>СЫГРАТЬ ЕЩЕ</div>
        <div className="logo"></div>
      </div>
    )
  }

}

export default PageProduct;