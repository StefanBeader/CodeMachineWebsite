import React from 'react';
const ServiceItem = (props) => {
  return (
    <div className="items">
      <div className="icon">
        <img src={`/static/images/${props.service.icon}`} alt="" className="responsive" />
      </div>
      <h4>{props.service.title}</h4>
      <p>{props.service.body}</p>
    </div>
  )
};

export default ServiceItem;