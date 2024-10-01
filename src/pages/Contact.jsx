import React, { useEffect, useRef, useState } from 'react'
import { ContactData } from '../utils/ContactData'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'
import { message } from 'antd';

const notify = () => toast('Form submited successfully', {style: {border: '1px solid black', background: 'rgb(17 24 39)', color: 'white'}});

const Contact = () => {

  const [Disable, setDisable] = useState(true)
  const [user, setUSer] = useState({
    text: '',
    email: '',
    message: ''
  })
  
  useEffect(() => {
   if (user.text.length > 0 && user.email.length > 0 && user.message.length > 0) {
    setDisable(false)
   } else {
    setDisable(true)
   }
  }, [user])
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dsnj0jk', 'template_pqr0dzq', form.current, {
        publicKey: 'DA-lz7wlmr6g1Cf35',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='grid md:grid-cols-2 w-full' id='contact'>
        <div className="flex flex-col items-center justify-center min-h-8 bg-gray-100 p-6 flex-wrap">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <h2 className='text-2xl font-bold mb-9 text-center'>My Details</h2>
            <div className="grid grid-rows-3 gap-9">
             {
                ContactData.map((item) => (
                    <div className="flex gap-4" key={item.id}>
                    <p className='text-xl font-bold font-sans'>{item.title}:</p>
                    <h2 className='text-xl font-sans'>{item.Name}</h2>
                </div>
                ))
             }
            </div>
        </div>
        </div>
    
    <div className="flex flex-col items-center justify-center min-h-8 bg-gray-100 p-6 flex-wrap">
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
      <form  method="POST" ref={form} onSubmit={sendEmail}>
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input type="text" value={user.text} onChange={(e)=> setUSer({...user, text: e.target.value})} id="name" name="from_name" className="w-full px-3 py-2 border rounded-lg" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input type="email" id="email" value={user.email} onChange={(e)=> setUSer({...user, email: e.target.value})} name="email" className="w-full px-3 py-2 border rounded-lg" placeholder="Your Email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message:</label>
          <textarea id="message" name="message" value={user.message} onChange={(e)=> setUSer({...user, message: e.target.value})} className="w-full px-3 py-2 border rounded-lg" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" onClick={notify} value='send' className={`${Disable ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} w-full text-white py-2 rounded-lg `}>Submit</button>
      </form>
    </div>
  </div>
  </div>
  )
}

export default Contact
