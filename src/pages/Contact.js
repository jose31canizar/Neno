import React, { Component } from 'react';
import HorizontalTextSection from '../components/HorizontalTextSection';
import contactMark from '../content/Contact.md';
import PageLayout from '../layout/PageLayout';
import Banner from '../layout/Banner';

class Contact extends Component {
  render() {
    return (
      <PageLayout>
        <div className="page">
          <Banner
            title='Contact Us'
            page='contact'
            i='0'
          />
          <div className="info" id="info">
            <HorizontalTextSection>
              <div className='markdown' dangerouslySetInnerHTML={{__html: contactMark}}>
              </div>
            </HorizontalTextSection>
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default Contact;
