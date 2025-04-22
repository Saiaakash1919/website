import React from 'react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Modern Architecture',
    description: 'Innovative designs that blend functionality with aesthetics.',
    image: 'https://images.pexels.com/photos/3728184/pexels-photo-3728184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Urban Landscaping',
    description: 'Transforming city spaces into green, vibrant environments.',
    image: 'https://images.pexels.com/photos/6527063/pexels-photo-6527063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Sustainable Living',
    description: 'Eco-friendly homes with energy-efficient solutions.',
    image: 'https://images.pexels.com/photos/7534549/pexels-photo-7534549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Commercial Spaces',
    description: 'Creative layouts for dynamic business environments.',
    image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];


const Projects = () => {
  const navigate = useNavigate();

const handleBack = () => {
  navigate(-1); // Takes the user one step back in history
};

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
         <button
      onClick={handleBack}
      className="fixed top-4 left-4 bg-slate-600 text-white px-4 py-2 rounded-md text-sm shadow-lg hover:bg-gray-800 transition z-50"
    >
      ← Back
    </button>
      <h2 className="text-4xl font-bold text-center text-purple-100 mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-400 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300">
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
