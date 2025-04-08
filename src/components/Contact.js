

import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">Contact Us</h2>
        <p className="text-gray-500 text-center mb-6">We'd love to hear from you! Fill out the form below.</p>

        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
