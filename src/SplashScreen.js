import React, { useEffect, useState } from 'react';
import './SplashScreen.css';
import { IoMenu } from "react-icons/io5";
import Footer from './Footer';
import CircularGallery from './CircularGallery';
import { ImCross } from "react-icons/im";



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

  const secondtopImages = [
    'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  const secondbottomImages = [
    'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
  const [showContact, setShowContact] = useState(false);
 
  const handleContactClick = () => {
    setShowContact(!showContact);
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTopIndex((prevIndex) => (prevIndex + 1) % topImages.length);
      setBottomIndex((prevIndex) => (prevIndex + 1) % bottomImages.length);
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
    <div className="flex flex-wrap">
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-stone-500 text-white p-4 transition-transform duration-300 ease-in-out z-50">
          <button
            onClick={toggleMenu}
            className="text-white  mb-4 hover:text-gray-900 text-4xl font-bold"
          >
           <ImCross />
          </button>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gray-900 text-4xl font-bold ">Home</a></li>
            <li><a href="#About" className="hover:text-gray-900 text-4xl font-bold">About</a></li>
            <li><a href="#Projects" className="hover:text-gray-900 text-4xl font-bold">Projects</a></li>
            <li><a href="#Contact" className="hover:text-gray-900 text-4xl font-bold ">Contact</a></li>
          </ul>
        </div>
      )}

      {/* Brand Name and Menu Button */}
      <div className="brand-container flex items-center justify-between p-4">
        <button onClick={toggleMenu} className="menu-button text-4xl font-bold">
          <IoMenu className="text-3xl" /></button>
        <h1 className="brand-name font-bold">SIO</h1>
        <button className="contact-btn">Contact Us</button>
      </div>
      
 {/* Image Container */}
 <div className="image-container">  
        <img
          src={topImages[topIndex]}
          alt="Top"
          className="top-image m-3"
        />
        <div class="overlay-text">We deliver exceptional,
beautiful and unrivalled bespoke
construction projects in London.</div>
        <img
          src={bottomImages[bottomIndex]}
          alt="Bottom"
          className="bottom-image"
        />
      </div>

 {/* Image Container */}

       <div>
        <div class="overlay-text font p-0 mt-[47%] font-black">"Architecture is the learned game, correct and magnificent, of forms assembled in light." — Le Corbusier.</div>
        <img
          src={secondbottomImages[bottomIndex]}
          alt="Bottom"
          className="bottom-image ml-[120%]  p-0 mt-0  "
        />
      </div>
       {/* Image Container */}
 <div className="image-container ">
        <img 
          src={thirdtopImages[topIndex]}
          alt="Top"
          className="top-image m-6"
        />
       
        <img 
          src={thirdbottomImages[bottomIndex]}
          alt="Bottom"
          className="bottom-image  last "
        />
      </div>
      <div style={{ height: '600px',position: 'relative' }}
      className="w-full">
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>
     <Footer/>
    </div>
  );
};

export default SplashScreen;
