const Footer = () => {
  return (
    <footer>
      <div className="cm-container">
        <div className="logo">
          <a href="">
            <img src="../static/images/cm-logo-with-name.svg" className="image-responsive" alt="" />
          </a>
        </div>
        <p>We are software development agency,
          aimed at creating unique and powerful tools for your business &amp; everyday life.</p>
        <hr />
        <div className="copyright">
          <p>All rights reserved &copy;CodeMachine <span id="year">{new Date().getFullYear()}</span></p>
        </div>

      </div>
    </footer>
  )
};

export default Footer;