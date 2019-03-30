import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faSkype, faFacebookF, faLinkedinIn, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faPhone, faMapMarkerAlt, faSkype, faFacebookF, faLinkedinIn, faTwitter, faInstagram);

const ContactInfo = () => {
  return (
    <div className="cm-info animation fade-from-left">
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
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon">
            <FontAwesomeIcon icon={faFacebookF}/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon">
            <FontAwesomeIcon icon={faLinkedinIn}/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="icon">
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
        </div>
      </div>
    </div>
  )
};

export default ContactInfo;