import Image from "next/image";
import { useState } from "react";
import './lightbox.css';

const Lightbox = ({clickedImg, handleRotationRight, handelRotationLeft, setClickedImg}) => {

    const handleClick = (e) =>{
    if(e.target.classList.contains("dismiss")){

        setClickedImg(null);
}
    }
return(
    <>
    <div className="overlay dismiss" onClick={handleClick}>
      <div className="relative w-[300px] h-[270px] md:w-[70vw] md:h-[60vh] xl:w-[40vw] xl:h-[60vh] imageActive">
    <Image 
src={clickedImg}
alt="full-image"
blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
placeholder="blur"
fill
style={{objectFit:"contain"}}
sizes={'(max-width: 1250px) 100vw, 1250px'}
className=""
/>
</div>
        <span className=" dismiss" onClick={handleClick}>X</span>
        <div onClick={handelRotationLeft} className="overlay-arrows_left">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#ffffff"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div onClick={handleRotationRight} className="overlay-arrows_right">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#ffffff"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
    </div>
    </>
)
}
export default Lightbox;