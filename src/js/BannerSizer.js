function setSize() {
  const GAME_WIDTH = 320;
  const GAME_HEIGHT = 480;
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const WW = (iOS) ? window.screen.width : document.documentElement.clientWidth;
  const WH = (iOS) ? window.screen.height : document.documentElement.clientHeight;
  // const WW = window.innerWidth;
  // const WH = window.innerHeight;
  var k = 1;
  var realWidth = GAME_WIDTH;
  if (WH > WW) {
    realWidth = WW;
  } else {
    realWidth = (GAME_WIDTH/GAME_HEIGHT*WH)
  }
  k = +(realWidth/GAME_WIDTH).toFixed(2) + 0.01; // добавим чуть-чуть размера
  document.body.style.transform = `scale(${k}, ${k})`;
  // console.log(`scale(${k}, ${k})`)
}

const BannerSizer = function() {
  setSize();
  window.addEventListener('resize', () => {
    setSize();
  }) 
}

export default BannerSizer;