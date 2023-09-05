import { FC, React } from 'react';
import { findProjectBySlug } from '../../utils/projectData';
import projectsData from '../../data/projects.json'; // Adjust the import path to match your project structure
import PageHeader from '../../components/PageHeader';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'


interface PageProps {
    params: {
      slug: string;
    };
  }

const ProjectPage: FC<pageProps> =  ({params}) => {
   
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
  
    return (
        <>
<Navbar/>
<PageHeader title='Project Details' imgSource={"/assets/images/gallery-hero.webp"} curL='Gallery'/>
    
<div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-lg p-6">
        <header className="text-center bg-blue-500 text-white py-4 px-6 rounded-t-lg">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg">{project.category}</p>
          <p className="text-base">{project.description}</p>
        </header>
        <section className="p-6">
          <div className="flex justify-between mb-6">
            <div>
              <p className="font-semibold">Scopes:</p>
              <ul className="list-disc list-inside">
                {project.scopes.map((scope, index) => (
                  <li key={index}>{scope}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold">Date:</p>
              <p>{project.date}</p>
            </div>
            <div>
              <p className="font-semibold">Client:</p>
              <p>{project.client}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={images}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
      <Footer/>
      </>
    );
  };
  
  export default ProjectPage;