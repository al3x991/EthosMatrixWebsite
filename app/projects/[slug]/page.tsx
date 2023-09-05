import { FC } from 'react'
import { findProjectBySlug } from '../../utils/projectData'
import projectsData from '../../data/projects.json'; // Adjust the import path to match your project structure

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
        console.log(project);
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
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
       
      </div>
    );
  };
  
  export default ProjectPage;