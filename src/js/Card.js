import React, { Component } from 'react';
import classNames from 'classnames';

class Card extends Component {

  render() {
    return (
      <div 
        className={classNames("flip-container card", {
          'flip': this.props.flip
        })} 
        onClick={this.props.onClick}
      >
        <div className="flipper">
          <div className="front">

          </div>
          <div className={`back back_${this.props.code}`}>

          </div>
        </div> 
      </div>
    )
  }

}

export default Card;