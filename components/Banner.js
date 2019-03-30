import Scroll from '../functions/Scroll';

const Banner = () => {
  return (
    <section className="banner">
      <div className="cm-container">
        <div className="banner-image"></div>
        <div className="call-to-action animation fade-from-right">
          <h2>Let's Develop Your Next Great App!</h2>
          <p>Do you need a unique software solution for your company? We know how to help you!</p>
          <div className="call-to-action-buttons">
            <button onClick={() => Scroll('contact')} className="cm-button">Get in touch</button>
            <button onClick={() => Scroll('services')} className="cm-button">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Banner;