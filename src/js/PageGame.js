import React, { Component } from 'react';
import Card from './Card';
import GameTimer from './GameTimer';
import { shuffle } from './helpers';
import '../css/page-game.css';

const ARR_5 = Array.from(Array(5).keys()); // => [0,1,2,3,4]

class PageGame extends Component {

  constructor(props) {
    super(props)
    
    let preparingState = {}; // готовим стейт поэтапно
    const randomArr = shuffle(ARR_5.concat(ARR_5).concat(ARR_5).concat(ARR_5));
    this.cards = randomArr.map((item, index) => {
      preparingState[index] = {index: index, code: item, flip: false};
      return {index: index, code: item}
    })
    this.state = {...preparingState, clicked: false}
    this.foundPairsLength = 0;
    this.pair = null;

    this.finish = this.finish.bind(this);

    // window.finish = this.finish;
  }

  componentDidMount() {
    this.timeStart = null;
  }

  newPair(index) {
    let timeout = setTimeout(() => {
      this.closePair(false)
    }, 3 * 1000);
    return {timeout: timeout, indexes: [index]}
  }

  closePair(finish) {
    if (!this.pair) return;
    clearTimeout(this.pair.timeout);
    let preparingState = {...this.state};
    this.pair.indexes.map((index) => {
      preparingState[index] = {...preparingState[index], flip: finish, finish: finish};
      return index;
    })
    this.setState({...preparingState})
    this.pair = null;
  }

  onClickCard(index) {
    if (!this.state.clicked) {
      this.setState({clicked: true})
      this.timeStart = new Date();
      if (window.parent) window.parent.postMessage('banner.preventClosing', '*')
    }
    let card = {...this.state[index]};
    if (card.flip) return;
    
    if ((this.pair) && (this.pair.indexes.length===1)) {
      this.pair.indexes.push(index);
      this.checkPair(this.pair.indexes);
    } else {
      this.closePair(false)
      this.pair = this.newPair(index);
    }

    card.flip = true;
    this.setState({
      [index]: {...card}
    })
  }

  checkPair(indexes) {
    if (indexes.length!==2) return;
    if (this.state[indexes[0]].code === (this.state[indexes[1]].code)) {
      this.closePair(true);
      this.foundPairsLength++;
      if (this.foundPairsLength===10) {
        this.finish();
      }
    }
  }

  finish() {
    this.setState({
      finish: true,
    })
    this.props.onFinish(new Date() - this.timeStart);
  }



  render() {
    return (
      <div className="page page_game">
        {this.state.clicked? 
          <GameTimer stop={this.state.finish} />
        :
          <div className="game-title"><span className="color-pink">Открой футляр </span>и найди к нему пару</div>
        }
        <div className="cards-container">
          {this.cards.map((item) => 
            <Card 
              index={item.index} 
              code={item.code} 
              flip={this.state[item.index].flip} 
              key={item.index} 
              onClick={() => {this.onClickCard(item.index)}} 
            />
          )}
        </div>
      </div>
    )
  }

}

export default PageGame;