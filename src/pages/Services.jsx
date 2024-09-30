import React from 'react';
import { Timeline } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles

const Services = () => {
  return (
    <div className="bg-gray-100 py-16 rounded-lg" id='services'>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>

        <Timeline mode="alternate">
          <Timeline.Item>
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p>We provide full-stack web development services to create responsive and dynamic websites.</p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <h3 className="text-xl font-semibold">FrontEnd web Design</h3>
            <p>Designs intuitive and user-friendly interfaces to enhance user experiences.</p>
          </Timeline.Item>
          <Timeline.Item>
            <h3 className="text-xl font-semibold">E-commerce Solutions</h3>
            <p>I build robust e-commerce platforms to scale your online business and provide seamless shopping experiences.</p>
          </Timeline.Item>
          <Timeline.Item color="red">
            <h3 className="text-xl font-semibold">Portfolio</h3>
            <p>I create Portfolio user friendly and responsive for all devices.</p>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}

export default Services;
