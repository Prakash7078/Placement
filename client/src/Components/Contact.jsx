import  {useRef, useState } from 'react'

import emailjs from '@emailjs/browser'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { BASE_URL } from '../config/url';
import { useSelector } from 'react-redux';
function Contact() {
  // const form = useRef();
  const userInfo = useSelector((state) => state.auth.userInfo);
 const navigate=useNavigate();
  const[text,setText]=useState('');
  const msgHandler=async(e)=>{
    e.preventDefault();  
    //serviceID,templateID,form,public key
    // emailjs.sendForm('service_a2zj3nf', 'template_qs0kz2b', form.current, 'y2GRM_qsFn95-TOCY')
    // .then((result) => {
    //     console.log("result",result.text);
    // },(error) => {
    //     console.log(error.text);
    // });
    if(userInfo){
      try{
        const rollno=userInfo.rollno;
        const name=userInfo.username;
        const email=userInfo.email;
        await axios.post(`${BASE_URL}/api/msgs/send`,{
            name,
            email,
            rollno,
            text,
        });
        // window.location.reload();
        setText("");
      }catch(err){
          toast.error("check details...");
      }
    }else{
      toast.error("Please Login to application");
      navigate('/login');
    }
  }     

  return (
    <div id="#contact" className="text-gray-600 body-font relative  ">
         <div className="px-5  mx-auto">
            <div className="flex flex-col text-center py-10">
              <h1 className="sm:text-3xl text-2xl font-bold title-font text-black">
                Contact Us
              </h1>
            </div >
            <div className="w-1/2 mx-auto ">
              <form
                // ref={form}
                onSubmit={msgHandler}
                className="flex flex-wrap "
                action="#"
              >
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    readOnly
                    value={userInfo?.username}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-800 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    readOnly
                    value={userInfo?.email}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-500 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-500 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-blue-400 border-0 py-2 px-8 focus:outline-none rounded text-lg">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full pt-2 my-4 border-t border-gray-200 text-center">
                <a className="text-blue">jobportal@gmail.com</a>
              </div>
            </form>
            </div>
          </div>
        
    </div>
  )
}

export default Contact