import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

const handleBack = () => {
  navigate(-1); // Takes the user one step back in history
};

  return (
    <div className="min-h-screen bg-gray-500 text-gray-800">
         <button
      onClick={handleBack}
      className="fixed top-4 left-4 bg-black text-white px-4 py-2 rounded-md text-sm shadow-lg hover:bg-gray-800 transition z-50"
    >
      ← Back
    </button>
      {/* Hero Section */}
      <section className="bg-gray-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl">We build innovative solutions with passion and purpose.</p>
      </section>

      {/* About Section */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          At SIO, our mission is to deliver exceptional, bespoke architectural designs that inspire and endure.
          We believe in creating spaces that reflect the unique vision of our clients while pushing the boundaries of design and sustainability.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-400 py-12">
  <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>

  <div className="flex flex-wrap justify-center gap-6 px-4">
    {[
      {
        name: 'Cherish',
        role: 'Founder',
        
        img: 'https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600'
       ,
      },
      {
        name: 'Cherish',
        role: 'Project Manager',
        img: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        name: 'Cherish',
        role: 'Interior Designer',
        img: 'https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      }
    ].map((member, index) => (
      <div key={index} className="bg-purple-400 shadow-lg rounded-lg overflow-hidden w-80">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center text-white">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-gray-200">{member.role}</p>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default About;
