'use client';

import PageHeader from '../../components/PageHeader';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import Image from 'next/image';
import { client } from '../../lib/sanity';
import { Post } from '../../lib/interface';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../lib/sanityImageUrl';
import { FaCalendar, FaUser, FaFolder } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import Link from 'next/link';

async function getData(slug: string) {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

    const data = await client.fetch(query);

    return data;
}

export default async function BlogDetails({
    params,
}: {
    params: { slug: string};
}){
    const data = (await getData(params.slug)) as Post;


    return (
        <>
        <Navbar />
        <PageHeader title={data.title} imgSource={urlFor(data.cover_image).url()} curL='Blog'/>
        <div className='xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto '>
           <div className=' p-12'>
            <div className='mb-10'>
            <div className="flex flex-row gap-1 items-center text-base py-2">
      <div className="flex items-center ">
        <FaCalendar className="w-3 h-3 mr-2 text-slate-400" />
        <p className='text-slate-400'>
          {new Date(data._createdAt).toISOString().split("T")[0]}
        </p>
      </div>
      <FiMoreVertical className=' text-slate-400' />
      <div className="flex items-center ">
        <FaUser className="w-3 h-3 mr-2 text-slate-400" />
        <p className='text-slate-400'>Admin</p>
      </div>
      <FiMoreVertical className=' text-slate-400' />
      <div className="flex items-center">
        <FaFolder className="w-3 h-3 mr-2 text-slate-400" />
        <p className='text-slate-400'>News</p>
      </div>
    </div>
            </div>
            <div className='text-gray-700'>
            <PortableText value={data.content} components={{
    block: {
      h1: ({children}) => <h1 className="text-2xl font-semibold text-gray-700">{children}</h1>,
h3: ({children}) => <h1 className="text-2xl font-medium text-gray-700">{children}</h1>,
    },
       types: {
        image: ({ value }: { value: any }) => {
          return (
            <Image
              src={urlFor(value).url()}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              width={800}
              height={800}
              className='rounded-lg mx-auto p-10'
              alt="Blog Image"
            />
          );
        },
      },
        marks: {
   
    em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,

    link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <Link href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
          {children}
        </Link>
      )
    },
  },
      list: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
    number: ({children}) => <ol className="mt-lg">{children}</ol>,
    // Ex. 2: rendering custom lists
    checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
  },
  }} />
  </div>
           </div>
        </div>
        <Footer />
        </>
    );
}