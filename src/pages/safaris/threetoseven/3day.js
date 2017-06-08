import React, { Component } from 'react';
import threeMD from '../../../content/Safaris/3to7DaySafaris/3DaySafari.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Threeday extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>3 Days</h1>
            <img className='banner-image' src={require('../../../img/safaris/long/0.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
           <div className='markdown' dangerouslySetInnerHTML={{__html: threeMD}}>
           </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Threeday;
