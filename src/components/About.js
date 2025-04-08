import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white text-center py-20">
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
      <section className="bg-white py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
              <img
                src={`https://via.placeholder.com/300x200?text=Team+Member+${item}`}
                alt={`Team Member ${item}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">Team Member {item}</h3>
                <p className="text-gray-500">Architect</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
