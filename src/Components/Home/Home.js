import React from 'react';
import Header from './../shared/header';
import Footer from './../shared/footer';
import Banner from './banner';
import Astrologer from './astrologer';
import AstrologerList from './astrologerlist';

const Home=()=>
{
  return <div> <Header />
  <Banner />
  <Astrologer />
  <AstrologerList />
  <Footer />
  </div>;
}
 
export default Home;