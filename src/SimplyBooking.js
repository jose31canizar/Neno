import React, { Component } from 'react';
import PageLayout from './layout/PageLayout'
var SimplybookWidget = require('./SimplyBookMe')

class SimplyBooking extends Component {
  render() {
    var widget = new SimplybookWidget({
      "widget_type":"iframe",
      "url":"https:vivoapps.simplybook.me",
      "theme":"default",
      "theme_settings":{
        "sb_base_color":"#656068",
        "booking_nav_bg_color":"#656068",
        "body_bg_color":"#656068",
        "dark_font_color":"#494949",
        "light_font_color":"#ffffff",
        "btn_color_1":"#5e7da7"},
        "timeline":"modern",
        "datepicker":"Top calendar",
        "is_rtl":false,
        "app_config":{
          "predefined":[]}
        });
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