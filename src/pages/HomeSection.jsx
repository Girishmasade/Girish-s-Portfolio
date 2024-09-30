import React from "react";
import character from '../assets/man.png'
import resume from '../assets/Girish Masade Resume.pdf'
import { Link } from 'react-scroll'
import toast from 'react-hot-toast'
const downloadcv = () => toast('Form submited successfully', {style: {border: '1px solid black', background: 'rgb(17 24 39)', color: 'white'}});
const HomeSection = () => {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center" id="home">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col justify-center text-white">
        <p className="pb-2 pl-2 text-lg">Hello I'm</p>
        <h1 className="text-5xl font-bold mb-4">
         Girish Vijay Masade | <span className="text-blue-400">Web Developer</span>
        </h1>
        <p className="text-lg mb-6">
          I am a passionate web developer, building modern and responsive websites.
          Let’s create amazing web experiences together!
        </p>
      <div className="flex gap-2">
      <Link 
          to="contact" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
          Hire ME
        </Link>
        
        <a 
        onClick={downloadcv}
          href={resume} 
          download={'Girish Masade Resume'}
          className="border-sky-900 border-2 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
          Download CV
        </a>
        
      </div>
      </div>
      
      <div className="flex justify-center">
        <img 
          src={character}
          alt="Portfolio Image" 
          className="w-full max-w-md"
        />
      </div>
    </div>
  </div>
  );
};

export default HomeSection;
