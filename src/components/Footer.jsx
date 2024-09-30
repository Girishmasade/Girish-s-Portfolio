import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-lg">
        <div>
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <p className="text-black-400">
            I have a solid foundation in front-end and back-end development, and
            I enjoy turning complex problems into simple, beautiful, and
            intuitive designs
          </p>
          <div className="pt-4">
            <ul className="flex gap-4 text-2xl">
              <li>
                <a href="https://www.facebook.com/girish.masade.9" target="_blank" className="hover:text-blue-900"><FaFacebook/></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/girish-masade" target="_blank" className="hover:text-blue-900"><FaLinkedin/></a>
              </li>
              <li>
                <a href="https://github.com/Girishmasade" target="_blank" className="hover:text-blue-900"><FaGithub/></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:pl-20">
          <h2 className="text-lg font-semibold mb-4">Links</h2>
          <ul className="">
            <li>
              <Link to="home" className="hover:text-blue">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="hover:text-blue">
                About
              </Link>
            </li>
            <li>
              <Link to='services' className="hover:text-blue">
                Services
              </Link>
            </li>
            <li>
              <Link to='contact' className="hover:text-blue">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="text-black-400">
            <li>
              <Link to='services' className="hover:text-blue">
                Web Development
              </Link>
            </li>
            <li>
              <Link to='services' className="hover:text-blue">
              Web Design
              </Link>
            </li>
            <li>
              <Link to='services' className="hover:text-blue">
                Front-End Developer
              </Link>
            </li>
            <li>
            <Link
              to="services"
            >
              React Js Developer
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="text-black-400">Email: girishmasade@gmail.com</p>
          <p className="text-black-400">Linkedin: linkedin/girishmasade</p>
        </div>
        </div>
        <div className="pt-20 text-center text-lg">
            <p>Copyright ©2024 All rights reserved | This template is made with  by Girish Masade</p>
        </div>
    </footer>
  );
};

export default Footer;
