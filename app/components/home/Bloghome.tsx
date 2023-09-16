import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '../../lib/sanity';
import { Post } from '../../lib/interface';
import Link from 'next/link';
import { urlFor } from '../../lib/sanityImageUrl';
import PortableText from '@portabletext/react';

export default function Bloghome() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "post"]`;
      const fetchedData = await client.fetch(query);
      setData(fetchedData);
    }

    fetchData();
  }, []);

  return (
    <div className=" ">
      <div className="flex flex-col  py-20 justify-center items-center">
<h1 className=" text-4xl font-bold relative inline-block capitalize text-gray-700">
Latest <span className='text-color-primary'>News</span>
<div className="w-8 h-1.5 bg-amber-500 absolute  top-11 left-0 transform -translate-x-0"></div>
</h1>
</div>
      <div className="p-5 grid mx-auto max-w-[1200px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 text-gray-700">
        {data.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <div className="rounded overflow-hidden max-w-[360px] shadow-lg">
              <div className=" relative h-52 ">
                <Image
                  src={urlFor(post.cover_image).url()}
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  fill
                  sizes="(max-width: 1250px) 100vw, 1250px"
                  style={{ objectFit: 'cover' }}
                  alt="Blog Post 1"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-base mb-2 line-clamp-1 text-gray-700">{post.title}</div>
                <p className="text-gray-700 text-sm line-clamp-3">{post.overview}</p>
              </div>
              <div className="px-6 pt-4 pb-2">{/* Additional content */}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}