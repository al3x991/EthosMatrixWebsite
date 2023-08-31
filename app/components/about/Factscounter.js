import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup'; // Import react-countup

const Factscounter = () => {
const [isVisible, setIsVisible] = useState(false);
const { ref, inView } = useInView({ triggerOnce: true });

const counters = [
{ title: 'Projects Completed', targetNumber: 19 },
{ title: 'Professional Employees', targetNumber: 500 },
{ title: 'Satisfied Clients', targetNumber: 35 },
{ title: 'Years of Experience', targetNumber: 8 },
];

useEffect(() => {
if (inView) {
setIsVisible(true);
}
}, [inView]);

return (
<div
ref={ref}
className="flex flex-col items-center justify-center py-10 bg-gray-100"
>
<h1 className="text-4xl font-bold mb-8"></h1>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{counters.map(({ title, targetNumber }, index) => (
<div
key={index}
className={`text-center p-4 relative`}>
<div className='flex flex-col  justify-center items-center text-center'>
{isVisible && (
<div className='flex text-5xl font-bold'><CountUp className='' start={0} end={targetNumber} duration={3} /><p style={{color: '#F5A018'}}>+</p>
</div>
)}
<p className="text-base mb-2">{title}</p>
</div>
{index < counters.length - 1 && (
  <>
<div className="hidden md:block w-[1px] bg-gray-200 h-full absolute right-0 top-[-20px] mt-6"></div>
<div className="md:hidden w-full h-[1px] bg-gray-200 mt-6"></div></>
)}
</div>
))}
</div>
</div>
);
};

export default Factscounter;
