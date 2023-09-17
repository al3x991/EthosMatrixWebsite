"use client";

import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';





const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
	<div className="mx-auto max-w-screen-lg">
	<div className="flex flex-col md:flex-row gap-8 items-center py-12 mt-8">
	<div className=" flex flex-col justify-start items-start mx-auto p-8 xl:mx-0 xl:p-0">
       <h1 className="text-3xl font-bold text-gray-800 capitalize mb-12 text-center">Let's start a Conversation</h1> 
        <div className="text-base font-normal text-slate-600  p-2 mb-10 max-w-screen-lg">
          Our team is ready to assist you in any way we can. if you have inquiries, 
		  require our services or would like to collaborate with us. Feel free to contact us today and we will get back to you as soon as possible.
		  <div className="p-8 grid grid-cols-1 gap-6">
			<span className=" text-slate-900 text-1xl flex flex-row gap-2"><BsTelephone/><b className="font-normal">(234) 901 6773 236</b></span>
			<span className=" text-slate-900 text-1xl flex flex-row gap-2"><HiOutlineMail /><b className="font-normal">contact@ethosmatrix.com</b></span>
			<span className=" text-slate-900 text-1xl flex flex-row gap-2"><HiOutlineLocationMarker/><b className="font-normal"> 23A Marina, Lagos State, Marina, Lagos state</b></span>
		  </div>
		  Whether your a property owner looking for modern home designs, a real estate developer seeking
		   innovation or someone interested in learning more about our company, we're excited to connect with you. 
        </div>
      </div>
    <div className="flex flex-col p-10 font-sans w-full">
      <div className="items-center w-full  max-w-xl  self-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (submitted) {
              return;
            }
            setName("");
            setEmail("");
            setMessage("");

            setSubmitted(true);
            console.log(name, email, message);
            fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                message,
              }),
            });
          }}
        >
          <div className="flex flex-col gap-5 font-sans">
            <div className="flex flex-col gap-5">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                name="name"
                id="name"
                required
                className="border-[1px] border-gray-300 rounded-lg  px-5 py-1"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                name="email"
                id="email"
                required
                className="border-[1px] border-gray-300 rounded-lg  px-5 py-1"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="name">Message</label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message"
                id="message"
                required
                className="border-[1px] border-gray-300 rounded-lg  px-5 py-1"
              />
            </div>
            <div className="flex flex-col gap-5">
              <button
                type="submit"
                className={
                  submitted
                    ? "bg-black rounded-lg  px-5 py-1 flex items-center justify-center gap-5 text-slate-300"
                    : "bg-amber-500 text-white rounded-lg  px-5 py-1"
                }
              >
                {submitted && <FcCheckmark size={30} />}
                {submitted ? "Message Sent" : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
	  </div>
    </div>
	</div>
  );
};

export default ContactForm;