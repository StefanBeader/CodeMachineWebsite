import Scroll from '../functions/Scroll';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

function openMobileMenu() {
  document.getElementById("mobile-nav").style.width = 100 + 'vw';
}

function closeMobileMenu(e) {
  document.getElementById("mobile-nav").style.width = 0;
}
const Navigation = () => {
  return (
    <header id="nav">
      <nav className="cm-container">
        <div className="logo">
          <a href="">
            <img src="../static/images/logo.png" className="image-responsive" alt="" />
          </a>
        </div>
        <div className="nav-links">
          <ul className="large-nav">
            <li>
              <a onClick={() => Scroll('about')} href="#">About</a>
            </li>
            <li>
              <a onClick={() => Scroll('services')} href="#">Services</a>
            </li>
            <li>
              <a onClick={() => Scroll('outsourcing')} href="#">Outsourcing</a>
            </li>
            <li>
              <a onClick={() => Scroll('contact')} href="#">Contact</a>
            </li>
          </ul>
          <div className="cm-hamburger" onClick={openMobileMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className="mobile-nav-wrapper" id="mobile-nav" onClick={closeMobileMenu}>
          <ul className="mobile-nav">
            <li>
              <a onClick={() => Scroll('about')} href="#">About</a>
            </li>
            <li>
              <a onClick={() => Scroll('services')} href="#">Services</a>
            </li>
            <li>
              <a onClick={() => Scroll('outsourcing')} href="#">Outsourcing</a>
            </li>
            <li>
              <a onClick={() => Scroll('contact')} href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
};

export default Navigation;