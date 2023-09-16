import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '../../lib/sanity';
import { Post } from '../../lib/interface';
import Link from 'next/link';
import { urlFor } from '../../lib/sanityImageUrl';
import Skeleton from 'react-loading-skeleton';
import FilterDropdown from './FilterDropdown';
import { FaCalendar, FaUser, FaFolder } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';

async function fetchData() {
  const query = `*[_type == "post"]`;
  const data = await client.fetch(query);
  return data;
}

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // Number of posts per page
  const [searchTerm, setSearchTerm] = useState('');

   // Add a state variable to track the selected filter option
   const [selectedFilter, setSelectedFilter] = useState(''); // Initialize with an empty string

  // Handle filter change
  const handleFilterChange = (filterOption) => {
    setSelectedFilter(filterOption);
    setCurrentPage(1); // Reset the current page when changing filters
  };

  // Update the fetchData function to include sorting logic based on selectedFilter
  async function fetchData() {
    let query = `*[_type == "post"]`;

    // Apply sorting logic based on the selectedFilter
    if (selectedFilter === 'alphabetical') {
      query += ` | order(title asc)`;
    } else if (selectedFilter === 'recent') {
      query += ` | order(_createdAt desc)`;
    }

    const data = await client.fetch(query);
    return data;
  }

  // Use useEffect to trigger data fetching when selectedFilter changes
  useEffect(() => {
    fetchData().then((newPosts) => {
      setPosts(newPosts);
    }).catch((err) => {
      setError(err);
    });
  }, [selectedFilter]); // Trigger when selectedFilter changes

  // Fetch data initially
  useEffect(() => {
    setLoading(true);

    fetchData()
      .then((newPosts) => {
        setPosts(newPosts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // Handle page change
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the index of the first and last post for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Calculate the total number of pages based on the number of posts and posts per page
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Filter posts based on the search term
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.overview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=''>
      <div className='mx-auto max-w-screen-lg  xl:max-w-[1201px] 2xl:max-w-screen-xl '>
        <div className='flex flex-col md:flex-row flex-wrap justify-center p-5 md:p-20'>
        <div className='flex w-full flex-col md:flex-row gap-y-4 gap-x-12 justify-center items-center px-12 mb-4'>
              <div className="relative ">
              <input
  type="text"
  placeholder="Search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="px-4 py-2 border rounded pl-10 min-w-[200px] md:min-w-[320px] lg:min-w-[500px]" // Add pl-10 to create space for the icon
/>
<svg
  className="absolute right-3 top-3 w-5 h-5 text-amber-500" // Adjust position and size as needed
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
</svg>
            </div>
            <div className=''>
              <FilterDropdown onFilterChange={handleFilterChange} />
              </div>
            </div>
          <div className='p-5'>
       
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
            {filteredPosts.slice(indexOfFirstPost, indexOfLastPost).map((post) => (
              <div key={post._id} className='w-full md:max-w-[350px] h-full'>
                <div className="rounded shadow-lg">
                  <div className="relative h-52 w-full  overflow-hidden">
                    <Image
                      src={urlFor(post.cover_image).url()}
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                      layout="fill"
                      objectFit="cover"
                      alt="Blog Post 1"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-semibold text-gray-700 text-base mb-2 line-clamp-1">
                      {post.title}
                    </div>
                    <div className="flex flex-row gap-1 items-center text-xs py-2">
      <div className="flex items-center ">
        <FaCalendar className="w-3 h-3 mr-2 text-slate-300" />
        <p className='text-slate-300'>
          {new Date(post._createdAt).toISOString().split("T")[0]}
        </p>
      </div>
      <FiMoreVertical className=' text-slate-300' />
      <div className="flex items-center ">
        <FaUser className="w-3 h-3 mr-2 text-slate-300" />
        <p className='text-slate-300'>Admin</p>
      </div>
      <FiMoreVertical className=' text-slate-300' />
      <div className="flex items-center">
        <FaFolder className="w-3 h-3 mr-2 text-slate-300" />
        <p className='text-slate-300'>News</p>
      </div>
    </div>
                    <p className="text-gray-700 text-sm line-clamp-3 mb-10 font-normal">
                      {post.overview}
                    </p>
                    <p className='p-4 w-full text-center flex justify-center items-center'>
                      <Link
                        className="quote-btn w-full"
                        key={post._id}
                        href={`/blog/${post.slug.current}`}
                      >View More</Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div>
                <Skeleton height={150} count={5} /> {/* Loading skeleton */}
              </div>
            )}
            {error && <p>Error: {error.message}</p>}
            </div>
          </div>
          {/* <div className='hidden lg:block'>
            <div>
              <p>EthosMatrix Photo Reel</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {images.map((image, index) => (
                  <div key={index} className="relative w-[80px] h-[60px] 2xl:w-[100px] 2xl:h-[80px] overflow-hidden">
                    <Image 
                      src={image} 
                      alt={'About Image'}  
                      blurDataURL=" "
                      placeholder="blur"
                      style={{objectFit:"cover"}}
                      sizes={'(max-width: 1250px) 100vw, 1250px'}
                      priority
                      fill
                    />
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-2 px-4 py-2 rounded ${
              number === currentPage ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}