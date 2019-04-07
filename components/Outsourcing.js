import Accordion from './Accordion';

const Outsourcing = () => {
  return (
    <section id='outsourcing' className="outsourcing">
      <div className="cm-container">
        <div className="image">
          <img src="../static/images/3-outsourcing.svg" className="image-responsive" alt=""/>
        </div>
        <div className="content animation fade-from-right">
          <h3>Why chose us</h3>
          <h2>Outsourcing</h2>
          <Accordion />
        </div>
        <div>
        </div>
      </div>
    </section>
  )
};

export default Outsourcing;