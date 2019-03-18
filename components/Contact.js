import Form from './ContactForm';
import Info from './ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="cm-container">
        <div className="header">
          <h3>Get in touch</h3>
          <h2>Contact Us</h2>
        </div>
        <div className="flex">
          <Info />
          <Form />
        </div>
      </div>
    </section>
  )
};

export default Contact;