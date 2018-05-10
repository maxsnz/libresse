import React, { Component } from 'react';
import {timeDeltaToHHMM} from './helpers';

class GameTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: '00:00'
    }
    this.mounted = false;
  }

  componentWillMount() {
    this.mounted = true;
    this.timeStart = new Date();
    this.tick();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  tick() {
    if (!this.mounted) return;
    if (this.props.stop) return;
    const now = new Date();
    const delta = now - this.timeStart;
    let str = timeDeltaToHHMM(delta);
    this.setState({
      timer: str
    });
    setTimeout(() => {
      requestAnimationFrame(() => {
        this.tick();
      })
    }, 1000)

  }

  render() {
    return <div className="game-timer">{this.state.timer}</div>
  }

}

export default GameTimer;