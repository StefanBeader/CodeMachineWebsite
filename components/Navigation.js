import Scroll from '../functions/Scroll';

function scrollToAbout(e) {
  e.preventDefault();
  Scroll('about');
}

function scrollToOutsourcing(e) {
  e.preventDefault();
  Scroll('outsourcing');
}

function scrollToServices(e) {
  e.preventDefault();
  Scroll('services');
}

function scrollToContact(e) {
  e.preventDefault();
  Scroll('contact');
}

const Navigation = () => {
  return (
    <header id="nav">
      <nav className="cm-container">
        <div className="logo">
          <a href="">
            <img src="https://via.placeholder.com/150x50" alt="" />
          </a>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a onClick={scrollToAbout} href="">About</a>
            </li>
            <li>
              <a onClick={scrollToServices} href="">Services</a>
            </li>
            <li>
              <a onClick={scrollToOutsourcing} href="">Outsourcing</a>
            </li>
            <li>
              <a onClick={scrollToContact} href="">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
};

export default Navigation;