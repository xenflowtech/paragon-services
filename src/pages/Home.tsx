import React from 'react';
import VideoSection from '../components/VideoSection';
import ClientMarquee from '../components/ClientMarquee';
import CEOQuote from '../components/CEOQuote';
import AboutUs from '../components/AboutUs';
import ServicesSection from '../components/ServicesSection';
import CompanyDescription from '../components/CompanyDescription';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="section-hero"><VideoSection /></div>
      <div className="section-medium"><AboutUs /></div>
      <div className="section-large section-pt-0 section-pb-24"><ServicesSection /></div>
      <div className="section-medium section-pt-16 section-pb-24"><CompanyDescription /></div>
      <div className="section-small section-pt-40"><ClientMarquee /></div>
      <div className="section-small"><CEOQuote /></div>
      <div className="section-medium"><CallToAction /></div>
    </div>
  );
};

export default Home; 