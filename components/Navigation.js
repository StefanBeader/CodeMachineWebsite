import Scroll from '../functions/Scroll';

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