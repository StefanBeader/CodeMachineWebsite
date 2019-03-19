import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import About from '../components/About';
import Services from '../components/Services';
import Outsourcing from '../components/Outsourcing';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import "../sass/app.scss";

function HomePage() {
  return (
    <div>
      <Head>
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta name="Description" content="We are software development agency,
          aimed at creating unique and powerful tools for your business & everyday life." />
        <title>CodeMachine - Let's Develop Your Next Great App!</title>
      </Head>
      <div className="wrapper">
        <Navigation />
        <main>
          <Banner />
          <About />
          <Services />
          <Outsourcing />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default HomePage;