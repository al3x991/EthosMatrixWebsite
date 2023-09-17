import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '../../lib/sanity';
import { Post } from '../../lib/interface';
import Link from 'next/link';
import { urlFor } from '../../lib/sanityImageUrl';
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
  const [loading, setLoading] = useState(true); // Start with loading true
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); // Number of posts per page
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  async function fetchData() {
    let query = `*[_type == "post"]`;

    if (selectedFilter === 'alphabetical') {
      query += ` | order(title asc)`;
    } else if (selectedFilter === 'recent') {
      query += ` | order(_createdAt desc)`;
    }

    const data = await client.fetch(query);
    return data;
  }

  const handleFilterChange = (filterOption) => {
    setSelectedFilter(filterOption);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchData().then((newPosts) => {
      setPosts(newPosts);
    }).catch((err) => {
      setError(err);
    });
  }, [selectedFilter]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetchData()
        .then((newPosts) => {
          setPosts(newPosts);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }, 2000); // 2-second delay

  }, []);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.overview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Create a skeleton component for text
  const TextSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-4 w-full mb-2 rounded"></div>
      <div className="bg-gray-200 h-4 w-4/5 mb-2 rounded"></div>
      <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
    </div>
  );

  // Create a skeleton component for images
  const ImageSkeleton = () => (
    <div className="bg-gray-200 h-52 w-full"></div>
  );

  return (
    <div className=''>
      <div className='mx-auto max-w-screen-lg xl:max-w-[1201px] 2xl:max-w-screen-xl '>
        <div className='flex flex-col md:flex-row flex-wrap justify-center p-5 md:p-20'>
          <div className='flex w-full flex-col md:flex-row gap-y-4 gap-x-12 justify-center items-center px-12 mb-4'>
            <div className="relative ">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border rounded pl-10 min-w-[200px] md:min-w-[320px] lg:min-w-[500px]"
              />
              <svg
                className="absolute right-3 top-3 w-5 h-5 text-amber-500"
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
          <div className='p-5 w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
              {loading ? (
                Array.from({ length: postsPerPage }).map((_, index) => (
                  <div key={index} className='w-full'>
                    <div className="rounded shadow-lg">
                      <ImageSkeleton />
                      <div className="px-6 py-4">
                        <TextSkeleton />
                        <div className="text-gray-700 py-4 text-sm line-clamp-3 mb-10 font-normal">
                          <TextSkeleton />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                filteredPosts.slice(indexOfFirstPost, indexOfLastPost).map((post) => (
                  <div key={post._id} className='w-full md:max-w-[350px] h-full'>
                    <div className="rounded shadow-lg">
                      <div className="relative h-52 w-full overflow-hidden">
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
                          <div className="flex items-center">
                            <FaCalendar className="w-3 h-3 mr-2 text-slate-300" />
                            <p className='text-slate-300'>
                              {new Date(post._createdAt).toISOString().split("T")[0]}
                            </p>
                          </div>
                          <FiMoreVertical className=' text-slate-300' />
                          <div className="flex items-center">
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
                        <div className='p-4 w-full text-center flex justify-center items-center'>
                          <Link
                            className="quote-btn w-full"
                            key={post._id}
                            href={`/blog/${post.slug.current}`}
                          >View More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
              
              
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
            {error && <p>Error: {error.message}</p>}
          </div>
          </div>
          {/* rightside */}
        </div>
      </div>
      {/* point2 */}
    </div>
  );
}
