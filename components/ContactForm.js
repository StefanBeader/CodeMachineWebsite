import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faSkype, faFacebookF, faLinkedinIn, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faPhone, faMapMarkerAlt, faSkype, faFacebookF, faLinkedinIn, faTwitter, faInstagram);

const ContactForm = () => {
  return (
    <section className="contact">
      <div className="cm-container">
        <div className="header">
          <h3>Get in touch</h3>
          <h2>Contact Us</h2>
        </div>
        <div className="flex">
          <div className="cm-info">
            <div className="info-item">
              <span className="cm-icon">
                <FontAwesomeIcon icon="envelope"/>
              </span>
              <span>info@codemachine.rs</span>
            </div>
            <div className="info-item">
              <span className="cm-icon">
                 <FontAwesomeIcon icon="phone"/>
              </span>
              <span>+381 063 592 961</span>
            </div>
            <div className="info-item">
              <span className="cm-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt}/>
              </span>
              <span>Bulevar Oslobođenja 92/3, 21000 Novi Sad, Serbia</span>
            </div>
            <div className="info-item">
              <span className="cm-icon">
                  <FontAwesomeIcon icon={faSkype}/>
              </span>
              <span>CodeMachine</span>
            </div>
            <div className="social-networks">
              <h4>Social Networks</h4>
              <div className="social-icons">
                <a href="https://facebook.com" className="icon">
                  <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="https://linkedin.com" className="icon">
                  <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
                <a href="https://twitter.com" className="icon">
                  <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="https://instagram.com" className="icon">
                  <FontAwesomeIcon icon={faInstagram}/>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form id="contact-message" action="#">
              <div className="cm-form-group">
                <input type="text" id="name" name="name" placeholder="Name" className="cm-form-control"/>
              </div>
              <div className="cm-form-group">
                <input type="email" id="email" name="email" placeholder="E-mail *"
                       className="cm-form-control required"/>
              </div>
              <div className="cm-form-group">
                                <textarea name="message" id="message" placeholder="Message *"
                                          className="cm-form-control required"></textarea>
              </div>
              <div className="cm-form-group flex">
                <button type="submit" id="sendMessage">Send</button>
                <span id="responseMessage"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ContactForm;