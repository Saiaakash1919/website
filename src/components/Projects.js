import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Modern Architecture',
    description: 'Innovative designs that blend functionality with aesthetics.',
    image: 'https://via.placeholder.com/400x250',
  },
  {
    id: 2,
    title: 'Urban Landscaping',
    description: 'Transforming city spaces into green, vibrant environments.',
    image: 'https://via.placeholder.com/400x250',
  },
  {
    id: 3,
    title: 'Sustainable Living',
    description: 'Eco-friendly homes with energy-efficient solutions.',
    image: 'https://via.placeholder.com/400x250',
  },
  {
    id: 4,
    title: 'Commercial Spaces',
    description: 'Creative layouts for dynamic business environments.',
    image: 'https://via.placeholder.com/400x250',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
