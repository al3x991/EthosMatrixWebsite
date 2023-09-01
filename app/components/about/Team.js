"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import {FaTimesCircle}  from 'react-icons/fa';
import './team.css';



const Teammembers = [
    {
    name: 'Panagiotis (Peter) Makris',                                                                         
    role: 'Co Founder',
    img: '/assets/images/team/peter_makris.webp',
    bio: "Panagiotis (Peter) Makris brings a wealth of experience and expertise to our team. With an impressive educational background including a Ph.D. from Cranfield University, Peter is currently in the final stages of his thesis focusing on the application of ethics in business. His professional journey has been characterized by notable achievements, such as co-founding and serving as Managing Director of ENARXIS INTERNATIONAL CONSULT LTD. He has also held key leadership roles at Primero Transport Services Ltd., where he served as Special Advisor to the MD, and at MIKEADE property development company Ltd., where he successfully managed a diverse property portfolio valued at over 1.5 billion USD in Nigeria. With a remarkable blend of skills in business administration, real estate, and property development, Peter's international experience across multiple sectors has solidified his reputation as a dynamic and versatile professional. His proactive approach and visionary leadership have consistently driven positive outcomes. Fluent in both Greek and English, Peter is a dedicated member of various business networks and is known for his contributions to business ethics research and practices.",
    },
    {
    name: 'Temitayo Ojeleke',                                                                         
    role: 'Director, Legal',
    img: '/assets/images/team/temitayo_ojeleke.webp',
    bio: "Temitayo Adesesan Ojeleke is a highly regarded professional with an exceptional legal career. Holding memberships in the Nigerian Bar Association, International Bar Association, and AIPN Model Contracts Committees, Temitayo is known for his proficiency in transactional law and expertise in the oil and gas sector. He earned his LL.M from The Robert Gordon University in the UK and was called to the Nigerian Bar in 1999. His comprehensive training includes certificates in world legal systems, oil and gas contracts, and LNG fundamentals. As the Founding Partner of Hawkes Legal, Temitayo's leadership is evident in his role as a legal adviser to the Federal Government of Nigeria on significant concessions and power asset sales. His consultancy expertise spans multinational organizations, public-private partnerships, and complex commercial projects. Temitayo's dynamic approach and versatility have earned him a reputation as a sought-after counsel in the legal and business domains.",
    },
    {
    name: 'Mayowa Tinubu',                                                                         
    role: 'Director, Marketing',
    img: '/assets/images/team/mayowa_tinubu.webp',
    bio: "Mayowa Tinubu, an accomplished professional, holds a Bachelor's degree in Economics & Political Science from Amherst College. Rising through the ranks at Barclays Investment Bank, Mayowa is now an Assistant Vice President in Credit Sales, fostering investor relationships. Mayowa's leadership extends to diversity initiatives at Barclays and significant roles at the Council of Amherst College Student Athletes of Colors. Presently, as Director of Marketing at Ethos Matrix, they drive strategic marketing efforts, leveraging a diverse skill set. With a history of leadership and community engagement, Mayowa enriches our team with a well-rounded perspective.",
    },
    ];

Modal.setAppElement('#__next');

const Team = () => {



const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (index) => {
    setSelectedMember(index);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };


return (
<div className="text-center py-16">

<h1 className=" text-3xl  md:text-4xl font-bold relative inline-block capitalize">
Our Executive<span className='text-amber-500'>&nbsp;Team</span>
<div className="w-8 h-1.5 bg-amber-500 absolute  top-11 left-0 transform -translate-x-0"></div>
</h1>
<div className='py-20'>
<div className="container mx-auto px-4 py-8 align-top grid grid-cols-1 space-y-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 content-evenly items-start">
{Teammembers.map((member, index) => (

<div key={index}
className="w-auto m-auto mt-0 pt-0 flex flex-col justify-center items-center text-center bg-white p-4 transform transition hover:scale-105 cursor-pointer"
onClick={() => openModal(index)}
>
    <div className='relative w-[250px] h-[300px] mb-4 mt-0 pt-0'>
    <Image src={member.img}
 placeholder='blur'
 blurDataURL=' '
 alt={member.name} 
 style={{objectFit:"cover"}}
 sizes={'(max-width: 250px) 100vw, 250px'}
 fill
 className="" />
    </div>

<h3 className="text-xl font-semibold mb-1">{member.name}</h3>
<p className="text-gray-500">{member.role}</p>
</div>
))}
</div>
{selectedMember !== null && (
        <Modal
          isOpen={selectedMember !== null}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
            <div className='p-8'>
          <h2 className="text-xl font-semibold mb-1">{Teammembers[selectedMember].name}</h2>
          <p className="text-gray-500">{Teammembers[selectedMember].role}</p>
          <p className="mt-4">{Teammembers[selectedMember].bio}</p>
          <div className="mt-4 absolute top-5 right-5 cursor-pointer rounded-md text-2xl text-slate-400 px-4 py-2" onClick={closeModal}>
            <FaTimesCircle />
          </div>
          </div>
        </Modal>
      )}
</div>


</div>
)
}

export default Team
