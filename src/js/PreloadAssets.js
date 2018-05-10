import React, { Component } from 'react';

class PreloadAssets extends Component {

  render() {
    return (
      <div className="preload-assets">
        <span>Предзагрузка ресурсов...</span>
        <div className="packs"></div>
        <div className="cases"></div>
        <div className="page_game"></div>
        <div className="page_finish"></div>
        <div className="page_product"></div>
        <div className="pack_1"></div>
        <div className="pack_2"></div>
        <div className="pack_3"></div>
        <div className="pack_4"></div>
        <div className="pack_5"></div>
      </div>
    )
  }

}

export default PreloadAssets;