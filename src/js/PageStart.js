import React, { Component } from 'react';
import '../css/page-start.css';

class PageStart extends Component {

  render() {
    return (
      <div className="page page_start" onClick={this.props.onClick}>
        <div className="logo"></div>
        <div className="packs"></div>
        <div className="text text_1">Libresse выпустили <br /><span className="color-pink">новые стильные</span> <br />футляры!</div>
        <div className="text text_2"><span className="color-pink">Сыграй</span> в игру и <span className="color-pink">оцени</span> <br />запоминающийся <br /><span className="color-pink">дизайн!</span></div>
      </div>
    )
  }

}

export default PageStart;