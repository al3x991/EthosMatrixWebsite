// /app/utils/projectData.ts
import projectsData from '../data/projects.json'


export function findProjectBySlug(slug) {
    return projectsData.projects.find((project) => project.slug === slug) || null;
  }