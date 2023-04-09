import React from 'react';
import Header from './../shared/header';
import Footer from './../shared/footer';
import Banner from './banner';
import Astrologer from './astrologer';
import AstrologerList from './astrologerlist';
import TestimonialSlider from './../shared/slider/testimonial';
import UsercardSlider from './../shared/slider/usercard';
const Home=()=>
{
  return <div> <Header />
  <Banner />
  <Astrologer />
  <AstrologerList />
  <UsercardSlider />
  <TestimonialSlider />
  <Astrologer />
  <AstrologerList />
  <UsercardSlider />
  <TestimonialSlider />
  <Footer />
  </div>;
}
 
export default Home;