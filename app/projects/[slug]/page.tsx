'use client';

import { FC } from 'react';
import { findProjectBySlug } from '../../utils/projectData';
import PageHeader from '../../components/PageHeader';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import Image from 'next/image';
import { useState } from "react";
import Lightbox from '../../components/Lightbox';
import { FaCheck } from "react-icons/fa";
import ImageSlider from '../../components/gallery/ImageSlider';

interface PageProps {
    params: {
      slug: string;
    }
  }

const ProjectPage: FC<PageProps> =  ({ params }) => {
   
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
    const totalength = project.image_flow.length;
    if(currentIndex + 1 >= totalength){
        setCurrentIndex(0);
        const newUrl = project.image_flow[0];
        setClickedImg(newUrl);
        return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = project.image_flow.filter((item) => {

        return project.image_flow.indexOf(item) === newIndex;

    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
}

const handelRotationLeft = () => {
    const totalLength = project.image_flow.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = project.image_flow[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = project.image_flow.filter((item) => {
      return project.image_flow.indexOf(item) === newIndex;
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

  const handleRotationRight2 = () => {
    const totalength = project.image_flow.length;
    if(currentIndex + 1 >= totalength){
        setCurrentIndex(0);
        const newUrl = project.image_flow[0];
        setClickedImg(newUrl);
        return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = project.image_flow.filter((item) => {

        return project.image_flow.indexOf(item) === newIndex;

    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
}

const handelRotationLeft2 = () => {
    const totalLength = project.image_flow.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = project.image_flow[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = project.image_flow.filter((item) => {
      return project.image_flow.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

    return (
        <>
<Navbar/>
<PageHeader title={project.title} imgSource={project.coverImage} curL='Projects'/>
    
<div className=" p-4 ">
  <div className='xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto'>
      <div className=" bg-white  p-6">
    <div className='py-4 mr-5 relative  xl:left-0 h-[300px] w-full  xl:max-w-[650px]  xl:w-[60%] mb-12'>
             <Image 
          src={project.project_image}
          fill 
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          placeholder="blur"
          style={{objectFit:"cover"}} 
          className='w-full h-full' 
           alt={`Image ${project.slug}`} />
           </div>
<div className='flex flex-col text-center justify-center xl:text-start lg:justify-normal lg:flex-row gap-2'>
  {/* left side */}
<div className=' flex-wrap 2xl:max-w-screen-md  max-w-[650px] text-center justify-center lg:text-start lg:justify-normal'>
        <div className="py-4">
          <p className="text-base py-3">{project.shortDescription}</p>
        </div>
          <div className="py-4  justify-center text-center xl:justify-normal xl:text-left">
              <p className="font-semibold">Project Scope:</p>
              <ul className="list-disc list-inside grid grid-cols-1  md:grid-cols-2 flex-wrap justify-center text-center items-center">
                {project.scopes.map((scope, index) => (
                  <li className='list-none flex flex-row gap-4 items-center justify-normal' key={index}><FaCheck className=' text-base text-amber-500' /><span>{scope}</span></li>
                ))}
              </ul>
            </div>
            <div className="py-4">
          <p className="text-base py-3">{project.description}</p>
        </div>
         {/* proposal architectural design images */}
        <div className='py-4'>
          <p className='py-8 font-semibold  lg:py-3'>{project.content === " "  ? '' : 'Photo Stream'  }<span className=' font-normal'>{project.content === " " ? '' : ' - Design'  }</span></p>
          <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-2">
          {project.content !== " " ?
          project.image_flow.map((image, index) => (
            <div
              key={index}
              className="relative h-[250px] md:h-[200px] transition-transform transform md:hover:cursor-pointer  hover:scale-[1.03] w-auto  "
            >
              <Image 
         src={image}
        fill 
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        placeholder="blur"
        style={{objectFit:"cover"}}
        onClick={()=>handleClick(image, index)} 
        className='w-[200px] h-full hidden md:block' 
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
          )) : ''}
          {clickedImg && <Lightbox clickedImg={clickedImg} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg} handelRotationLeft={handelRotationLeft}/>}
        </div>
          </div>
  {/* end proposal architectural design images */}

<div className=''>
<div className='p-4'>
  <h2 className=' text-base font-semibold text-black text-bold'>{project.category === "Architectural Design"  ? 'Project Gallery -' : 'Men at Work -'  } <span className=' font-medium'>{project.category === "Architectural Design"  ? ' Crafting Dreams' : ' Turning Visions into Reality'  }</span></h2>
  </div>
<div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-2">
          {project.content === " " ?
          project.image_flow.map((image, index) => (
            <div
              key={index}
              className="relative h-[250px] md:h-[180px] lg:h-[180px]  transition-transform transform md:hover:cursor-pointer  hover:scale-[1.03] w-auto  "
            >
              
              <Image 
         src={image}
        fill 
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        placeholder="blur"
        style={{objectFit:"cover"}}
        onClick={()=>handleClick(image, index)} 
        className='w-[100px] h-full hidden md:block' 
        alt={`Image ${index + 1}`} />
        <Image 
         src={image}
        fill 
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        placeholder="blur"
        style={{objectFit:"cover"}}
        className='w-full h-full block md:hidden' 
        alt={`Image ${index + 1}`} />
            </div>
          )) : ''}
          {clickedImg && <Lightbox clickedImg={clickedImg} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg} handelRotationLeft={handelRotationLeft}/>}
        </div>
</div>

        </div>
  {/* right side */}
        <section className=" grow">
          <div className="flex bg-slate-100 flex-col justify-between mb-6">
       
            
            <div className='p-8 text-base flex flex-col gap-y-4 flex-wrap'>
              <p className=" font-semibold">Client: <span className=' font-normal text-amber-500'>{project.client}</span></p>
              <div className=' border border-b-[0.8px]  border-slate-400 w-full'></div>
              <p className=" font-semibold">Type: <span className=' font-normal text-amber-500'>{project.category}</span></p>
              <div className=' border border-b-[0.8px]  border-slate-400 w-full'></div>
              <p className=" font-semibold">Location: <span className=' font-normal text-amber-500'>{project.location}</span></p>
              <div className=' border border-b-[0.8px]  border-slate-400 w-full'></div>
              <p className=" font-semibold">Date: <span className=' font-normal text-amber-500'>{project.date}</span></p>
            </div>
          </div>
          <div className=''>
          <p className='py-4 font-semibold  lg:py-3'>{project.content === " " ? 'Project Reel' : ''} <span className=' font-normal'>  {project.content === " " ? '-' + project.category : ''}</span></p>
          <div className="px-5">
        <ImageSlider images={project.images} />
        </div>


          </div>
    
        </section>



</div>
        

        
      </div>
      </div>
    </div>
      <Footer/>
      </>
    );
  };
  
  export default ProjectPage;