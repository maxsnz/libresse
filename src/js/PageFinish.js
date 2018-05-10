import React, { Component } from 'react';
import {timeDeltaToHHMM} from './helpers';
import '../css/page-finish.css';

const RESULTS = [
  {id: 5, text: (<span> <br />Ты быстрее <span className="color-pink">всех!</span></span>), time: 35*1000}, //(до 35 секунд)
  {id: 4, text: (<span> <br /><span className="color-pink">Гибкое</span> мышление!</span>), time: 55*1000}, //(до 55 секунд)
  {id: 3, text: (<span> <br /><span className="color-pink">Сильный</span> результат!</span>), time: 60*1000 + 15*1000}, //(до 1:15 минуты)
  {id: 2, text: (<span> <br />Медленно, <span className="color-pink">но верно!</span></span>), time: 60*1000 + 30*1000}, //(до 1:30 минуты)
  {id: 1, text: (<span>Главное, что ты <span className="color-pink">не сдаешься!</span></span>), time: 1000*1000}, //(все, что после 1:30 минуты)
]

class PageFinish extends Component {
  constructor(props) {
    super(props);
    this.result = RESULTS[RESULTS.length-1];
    RESULTS.reverse().map((item) => {
      if (this.props.time < item.time) {
        this.result = item;
      }
      return item;
    });
    // this.result = RESULTS[3];
  }

  render() {
    return (
      <div className="page page_finish" onClick={this.props.onClick}>
        <div className="text-slogan">{this.result.text}</div>
        <div className="text-result">твое время — <span className="color-pink">{timeDeltaToHHMM(this.props.time)}</span></div>
        <div className={`pack pack_${this.result.id}`}></div>
        <div className="logo"></div>
      </div>
    )
  }

}

export default PageFinish;