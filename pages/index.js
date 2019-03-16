import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import About from '../components/About';
import Services from '../components/Services';
import Outsourcing from '../components/Outsourcing';
import ContactForm from '../components/ContactForm';
import "../sass/app.scss";

function HomePage() {
  return (
    <div>
      <Head>
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <title>CodeMachine</title>
      </Head>
      <div className="wrapper">
        <Navigation />
        <main>
          <Banner />
          <About />
          <Services />
          <Outsourcing />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;