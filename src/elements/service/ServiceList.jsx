import React, { Component } from "react";
import { FiUsers, FiRss, FiLayers, FiZap, FiMonitor, FiDatabase } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiUsers />,
    title: "Custom Web Application Development",
    description:
      "Empower your business with tailor-made web applications designed to streamline operations and enhance user engagement. My expertise in full-stack development enables me to craft high-performance applications that are perfectly aligned with your business goals.",
  },
  {
    icon: <FiLayers />,
    title: "Responsive Website Design & Development",
    description:
      "Capture your audience's attention with stunning and responsive websites. I utilize cutting-edge UX/UI design principles and the latest web technologies to create websites that not only look great but also perform exceptionally across all devices.",
  },
  {
    icon: <FiRss />,
    title: "API Development & Integration",
    description:
      "Unlock the full potential of your software systems through seamless integration. With my in-depth knowledge of RESTful API development, I can create and integrate APIs that facilitate efficient communication between different systems, enriching functionality and user experience.",
  },
  {
    icon: <FiDatabase />,
    title: "Database Design & Management",
    description:
      "Safeguard your critical business data with robust database solutions. By leveraging SQL or NoSQL databases like MySQL, MongoDB, I design and manage databases that ensure data integrity, security, and optimized performance, making your data work for you.",
  },
  {
    icon: <FiZap />,
    title: "Performance Optimization & Scalability",
    description:
      "Propel your web applications to new heights with optimization and scalability solutions. I employ advanced computer science principles to analyze and optimize your applications, ensuring they are poised for growth and can handle increased traffic with ease.",
  },
  {
    icon: <FiMonitor />,
    title: "Technical Consulting & Problem-Solving",
    description:
      "Navigate the complex landscape of technology with confidence. As a full-stack developer, I provide expert advice and innovative solutions to technical challenges, helping you overcome hurdles and maximize the potential of your current systems.",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
