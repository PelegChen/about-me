import React from 'react';
import reactLogo from '../assets/react.svg';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce website with a custom CMS.',
    imageUrl: reactLogo,
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'A dashboard for visualizing complex datasets in real-time.',
    imageUrl: reactLogo,
  },
  {
    title: 'Mobile Fitness App',
    description: 'A cross-platform mobile app for tracking workouts and nutrition.',
    imageUrl: reactLogo,
  },
];

const ProjectGallery: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
      <div className="gallery-grid">
        {projects.map((project, index) => (
          <div key={index} className="gallery-item">
            <img src={project.imageUrl} alt={project.title} className="gallery-image" />
            <h3 className="gallery-title">{project.title}</h3>
            <p className="gallery-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
