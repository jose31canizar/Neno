import React, { Component } from 'react';
import PageLayout from './layout/PageLayout'
var SimplybookWidget = require('./SimplyBookMe');

var widget = new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/vivoapps.simplybook.me","theme":"default","theme_settings":{"sb_base_color":"#33bb60","booking_nav_bg_color":"#d1e9c6","body_bg_color":"black","dark_font_color":"#494949","light_font_color":"#ffffff","btn_color_1":"#5e7da7"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"predefined":[]}});

class SimplyBooking extends Component {
  componentDidMount() {
    setTimeout(function(){
      var iframe = document.getElementById('booking-iframe')
      iframe.style.display = 'inline'
    },1200)
  }
  render() {
    return (
      <div>
        <PageLayout>
          <div id='booking'>
          {widget.init()}
          </div>
        </PageLayout>
      </div>
    );
  }
}

export default SimplyBooking;
