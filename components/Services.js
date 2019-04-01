import ServiceItem from './ServiceItem.js'
const Services = () => {
  const services = [
    {
      icon: 'data.svg',
      title: "Web Applications",
      body: 'Ease and speed up your business by automating the activities you\'ve worked on manually until now.'
    },
    {
      icon: 'application.svg',
      title: "Mobile Applications",
      body: 'You have an idea for a mobile application we will help you to realize it.'
    },
    {
      icon: 'web.svg',
      title: "Wordpress",
      body: 'Build your style and become aware with the help of a unique and high-quality website.'
    },
    ];
  let delay = -500;
  return (
    <section id="services" className="services">
      <div className="cm-container">
        <div className="header">
          <h3>What we do</h3>
          <h2>Services</h2>
        </div>
        <div className="services-items">
          {services.map((service, index) => {
            delay += 500;
            return <ServiceItem key={index} delay={delay} service={service}/>
          })}
        </div>
      </div>
    </section>
  )
};

export default Services;