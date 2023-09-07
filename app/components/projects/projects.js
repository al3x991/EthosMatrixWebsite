'use client';

import Link from 'next/link';
import { useState } from 'react';
import projectsData from '../../data/projects.json';
import { HandymanOutlined } from '@mui/icons-material';
import { BsBricks } from "react-icons/bs";
import Image from "next/image";


export default function ProjectsList() {
const [categoryFilter, setCategoryFilter] = useState('All');
const [projectsToShow, setProjectsToShow] = useState(10);

// Function to filter projects based on category
const filteredProjects = projectsData.projects.filter((project) => {
if (categoryFilter === 'All') {
return true;
}
return project.category === categoryFilter;
});

// Function to handle load more button click
const handleLoadMore = () => {
setProjectsToShow((prevCount) => prevCount + 10);
};

// Function to render project cards
const renderProjectCards = () => {
return filteredProjects.slice(0, projectsToShow).map((project) => (
    // <Link key={project.slug} href={`/projects/${project.slug}`}></Link>
<Link key={project.slug} className='transition-transform transform md:hover:cursor-pointer  hover:scale-[1.03]' href={`./projects/${project.slug}`}>
<div className="project-card border rounded-lg overflow-hidden shadow-lg h-[410px] min-h-[410px]">
<div className='relative w-full h-48'>
<Image 
src={project.coverImage} 
alt={project.title} 
blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
placeholder="blur"
style={{objectFit:"cover"}}
fill
sizes={'(max-width: 1250px) 100vw, 1250px'}
className="w-full h-48 object-cover" />
</div>
<div className="p-4">
<div className="flex items-center mb-2">
<span className="text-lg font-bold">{project.title}</span>
</div>
<p className="text-sm text-gray-500">{project.shortDescription}</p>
<div className='flex flex-row gap-1  items-centers py-4 text-slate-300"'>
{project.category === 'Construction' && <BsBricks className="text-sm mr-2 text-slate-400"/>}
{project.category === 'Renovation' && <HandymanOutlined className="text-sm mr-2 text-slate-400"/>}
<span className='text-sm text-slate-400'>{project.category}</span>
</div>
</div>
</div>
</Link>
));
};

return (
<div className='container  py-16 max-w-screen-lg xl:max-w-screen-lg  2xl:max-w-screen-xl mx-auto px-10'>
{/* Category Filter */}
<div className="mb-8 mt-10">
<button onClick={() => setCategoryFilter('All')} className={categoryFilter === 'All' ? 'bg-amber-500 text-white px-4 py-2 mr-2 rounded-lg' : 'bg-transparent border border-amber-500   text-black px-4 py-2 mr-2 rounded-lg'}>
All
</button>
<button onClick={() => setCategoryFilter('Construction')} className={categoryFilter === 'Construction' ? 'bg-amber-500 text-white px-4 py-2 mr-2 rounded-lg' : 'bg-transparent border border-amber-500 text-black px-4 py-2 mr-2 rounded-lg'}>
Construction
</button>
<button onClick={() => setCategoryFilter('Renovation')} className={categoryFilter === 'Renovation' ? 'bg-amber-500 text-white px-4 py-2 mr-2 rounded-lg' : 'bg-transparent border border-amber-500 text-black px-4 py-2 mr-2 rounded-lg'}>
Renovation
</button>
<button onClick={() => setCategoryFilter('Architectural Design')} className={categoryFilter === 'Architectural Design' ? 'bg-amber-500 text-white px-4 py-2 mr-2 rounded-lg' : 'bg-transparent border border-amber-500 text-black px-4 py-2 mr-2 rounded-lg'}>
Architectural Design
</button>
<button onClick={() => setCategoryFilter('Real Estate')} className={categoryFilter === 'Real Estate' ? 'bg-amber-500 text-white px-4 py-2 rounded-lg' : 'bg-transparent border border-amber-500 text-black px-4 py-2 rounded-lg'}>
Real Estate
</button>
</div>

{/* Project Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4  xl:gap-x-8">
{renderProjectCards()}
</div>

{/* Load More Button */}
{projectsToShow < filteredProjects.length && (
<div className="mt-4 text-center">
<button onClick={handleLoadMore} className="bg-amber-500 text-white px-4 py-2 rounded-lg">
Load More
</button>
</div>
)}
</div>
);
}

