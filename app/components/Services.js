import React from 'react'

const Services = () => {

  const services = [
    {
      icon: '🌟', // Replace with your desired icon
      title: 'Feature 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: '🚀', // Replace with your desired icon
      title: 'Feature 2',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      icon: '💡', // Replace with your desired icon
      title: 'Feature 3',
      text: 'Vestibulum sed ipsum lacinia, euismod turpis sit amet, finibus ex.',
    },
    {
      icon: '🔍', // Replace with your desired icon
      title: 'Feature 4',
      text: 'Fusce quis libero id orci vulputate ultricies in a velit.',
    },
    {
      icon: '🌈', // Replace with your desired icon
      title: 'Feature 5',
      text: 'Aenean accumsan elit a mi sodales, nec vehicula urna venenatis.',
    },
    {
      icon: '🎉', // Replace with your desired icon
      title: 'Feature 6',
      text: 'Integer luctus nulla id ligula elementum, ut fermentum justo consectetur.',
    },
  ];

return (
  <div className="text-center mt-8">
  <h1 className="mt-28 text-4xl font-bold relative inline-block uppercase">
    Our <span className='text-color-primary'>Services</span>
    <div className="w-16 h-1.5 bg-amber-500 absolute  top-11 left-0 transform -translate-x-0"></div>
  </h1>
  <div className='mt-12'>
  <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div key={index} className="p-4">
          <div className="md:flex md:justify-start items-center justify-center">
            <div className="m-auto md:m-0 w-20 h-20 p-10 flex items-center justify-center rounded-full border-2 border-amber-500 md:mr-4">
              {service.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold md:text-left">{service.title}</h3>
              <p className="mt-2 md:text-left">{service.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  {/* <p className="mt-2 top-24 text-gray-600 capitalize">Subtitle</p> */}
</div>
)
}

export default Services
{/* <div className='ml-10 mr-10 mt-12  mb-40 md:px-10 lg:px-52'>
<div className='flex items-center justify-center'>
<h1 className='text-center text-2xl md:text-4xl uppercase  font-bold'>Our 
<span className='text-color-primary'>&nbsp;Services</span></h1>
</div>
<div className='flex items-center justify-center'>
  <p className='text-center text-base md:text-1xl capitalize font-medium'> All over system </p>
  </div>
</div> */}