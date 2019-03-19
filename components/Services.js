import ServiceItem from './ServiceItem.js'
const Services = () => {
  const services = [
    {
      icon: 'data.svg',
      title: "Web Applications",
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut distinctio, magni perferendis veritatis vitae.'
    },
    {
      icon: 'application.svg',
      title: "Mobile Applications",
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut distinctio, magni perferendis veritatis vitae.'
    },
    {
      icon: 'web.svg',
      title: "Wordpress",
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut distinctio, magni perferendis veritatis vitae.'
    },
    ];
  return (
    <section id="services" className="services">
      <div className="cm-container">
        <div className="header">
          <h3>What we do</h3>
          <h2>Services</h2>
        </div>
        <div className="services-items">
          {services.map((service, index) => {
            return <ServiceItem key={index} service={service}/>
          })}
        </div>
      </div>
    </section>
  )
};

export default Services;