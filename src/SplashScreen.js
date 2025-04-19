import React, { useEffect, useState } from 'react';
import './SplashScreen.css';
import { IoMenu } from "react-icons/io5";
import Footer from './Footer';
import CircularGallery from './CircularGallery';
import { ImCross } from "react-icons/im";
import CardRotate from "./CardRotate"
import { Link } from 'react-router-dom';

const SplashScreen = ({ onFinish }) => {
  const topImages = [
    'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  const bottomImages = [
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/258846/pexels-photo-258846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  const thirdtopImages = [
    'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  const thirdbottomImages = [
    'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5570224/pexels-photo-5570224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTopIndex(prev => (prev + 1) % topImages.length);
      setBottomIndex(prev => (prev + 1) % bottomImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col w-full">
      {/* Side Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-stone-500 text-black p-4 z-50">
          <button onClick={toggleMenu} className="text-white mb-4 text-3xl font-bold">
            <ImCross />
          </button>
          <ul className="space-y-4">
            {[ 'About', 'Projects', 'Contact'].map((label, i) => (
              <li key={i}>
                <Link
                  to={`/${label.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="hover:text-gray-300 text-2xl font-bold italic"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button onClick={toggleMenu} className="text-4xl font-bold text-white">
          <IoMenu className="text-3xl" />
        </button>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl brand-name">SIO</h1>
        <button className="contact-btn">Contact Us</button>
      </div>

      {/* Image Section */}
      <div className="image-container flex flex-col md:flex-row items-center justify-center px-4">
        <img src={topImages[topIndex]} alt="Top" className="w-full md:w-1/2 m-3" />
        <div className="overlay-text text-center md:text-left mt-4 font-bold text-lg sm:text-xl leading-loose tracking-wide max-w-2xl mx-auto px-4">
  We deliver exceptional,<br />
  beautiful and unrivalled bespoke<br />
  construction projects in London.
</div>



        <img src={bottomImages[bottomIndex]} alt="Bottom" className="w-full md:w-1/2" />
      </div>

      {/* Quote + Card */}
      <div className="Second-Textcontainer text-center px-4 mt-10">
        <div className=" Second-Text text-xl md:text-2xl font-black mb-6 text-white">
          "Architecture is the learned game, correct and magnificent, of forms assembled in light." — Le Corbusier.
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-full sm:w-3/4 md:w-1/2">
            <CardRotate />
          </div>
        </div>
      </div>

      {/* More Images */}
      <div className="image-container flex flex-col md:flex-row items-center justify-center p-4">
        <img src={thirdtopImages[topIndex]} alt="Top" className="w-full md:w-1/2 m-3" />
        <img src={thirdbottomImages[bottomIndex]} alt="Bottom" className="w-full md:w-1/2 m-3" />
      </div>

      {/* Circular Gallery */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>

      <Footer />
    </div>
  );
};

export default SplashScreen;
