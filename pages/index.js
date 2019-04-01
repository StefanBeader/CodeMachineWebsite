import {Component} from 'react';
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
import Animate from "../functions/Animation";

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('load', this.handleScroll);
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('load', this.handleScroll);
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(e) {
    Animate(e);
  }
  render() {
    return (
      <div>
        <Head>
          <meta name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
          <meta name="Description" content="We are software development agency,
          aimed at creating unique and powerful tools for your business & everyday life." />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
          <link rel="manifest" href="/static/images/site.webmanifest" />
          <title>CodeMachine - Let's Develop Your Next Great App!</title>
        </Head>
        <div className="wrapper" onScroll={() => Animate()}>
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
}

export default HomePage;