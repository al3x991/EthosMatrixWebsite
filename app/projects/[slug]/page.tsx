'use client';

import { FC } from 'react';
import { findProjectBySlug } from '../../utils/projectData';
import PageHeader from '../../components/PageHeader';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import Image from 'next/image';
import { useState } from "react";
import Lightbox from '../../components/Lightbox';

interface PageProps {
    params: {
      slug: string;
    };
  }

const ProjectPage: FC<PageProps> =  ({params}) => {
   
    // Check if slug is undefined or null
    if (!params) {
      return <div>Project slug is missing.</div>;
    }
  
    const project = findProjectBySlug(params.slug);
   
    if (!project) {
      return <div>Project not found</div>;
    }
  
    const {
      title,
      category,
      type,
      client,
      scopes,
      location,
      date,
      why,
      description,
      shortDescription,
      coverImage,
      images,
    } = project;
  
    const [clickedImg, setClickedImg] = useState(null);
const [currentIndex, setCurrentIndex] = useState(null);

const handleClick = (image, index) =>{
setCurrentIndex(index);
setClickedImg(image);
}

const handleRotationRight= () => {
    const totalength = project.images.length;
    if(currentIndex + 1 >= totalength){
        setCurrentIndex(0);
        const newUrl = project.images[0];
        setClickedImg(newUrl);
        return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = project.images.filter((item) => {

        return project.images.indexOf(item) === newIndex;

    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
}

const handelRotationLeft = () => {
    const totalLength = project.images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = project.images[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = project.images.filter((item) => {
      return project.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('lightbox-overlay')) {
      closeLightbox();
    }
  };


    return (
        <>
<Navbar/>
<PageHeader title='Project Details' imgSource={project.coverImage} curL='Projects'/>
    
<div className=" bg-gray-100 min-h-screen p-4 ">
  <div className='max-w-screen-lg mx-auto'>
      <div className=" bg-white  mx-autorounded-lg shadow-lg p-6">
    <div className='relative h-[300px] w-auto mx-auto xl:max-w-[80%]  xl:w-[60%]'>
             <Image 
          src={project.coverImage}
          fill 
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          placeholder="blur"
          style={{objectFit:"contain"}} 
          className='w-full h-full' 
           alt={`Image ${project.slug}`} />
           <p className="text-[10px] rounded-sm py-3 bg-amber-500 absolute top-5 right-5"><span className=' text-white p-1'>{project.category}</span></p>
           </div>
        <header className="text-center  py-4 px-6 rounded-t-lg">
          <h1 className="text-3xl font-bold py-3">{project.title}</h1>
          
          <p className="text-base py-3">{project.description}</p>
        </header>
        <section className="p-6">
          <div className="flex justify-between mb-6">
            <div>
              <p className="font-semibold">Project Scope:</p>
              <ul className="list-disc list-inside flex flex-row flex-wrap">
                {project.scopes.map((scope, index) => (
                  <li className='list-none' key={index}>&nbsp; {scope},</li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="font-semibold">Client:</p>
              <p>{project.client}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-2">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden h-[200px]  transition-transform transform md:hover:cursor-pointer  hover:scale-[1.03] w-full  xl:h-[300px] lg:w-auto max-w-[500px]"
              >
                <Image 
           src={image}
          fill 
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          placeholder="blur"
          style={{objectFit:"contain"}}
          onClick={()=>handleClick(image, index)} 
          className='w-full h-full hidden md:block' 
          alt={`Image ${index + 1}`} />
          <Image 
           src={image}
          fill 
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          placeholder="blur"
          style={{objectFit:"contain"}}
          className='w-full h-full block md:hidden' 
          alt={`Image ${index + 1}`} />
              </div>
            ))}
            {clickedImg && <Lightbox clickedImg={clickedImg} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg} handelRotationLeft={handelRotationLeft}/>}
          </div>
        </section>
      </div>
      </div>
    </div>
      <Footer/>
      </>
    );
  };
  
  export default ProjectPage;