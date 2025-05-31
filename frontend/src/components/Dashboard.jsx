
//frontend\src\components\Dashboard.jsx   after horoscope and kun too 
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

import narayanImg from '../images/narayan.png';
import rudraImg from '../images/rudra.png';
import navgrahImg from '../images/navgrah.png';


import avenuesLogo from '../images/avenues.png';
import kantipurLogo from '../images/kantipur.png';
import news24Logo from '../images/news24.png';
import primeLogo from '../images/prime.png';
import Footer from './Footer';

//import { useNavigate } from 'react-router-dom'; // ailelai chaiyena
import logoImage from '../images/image11.png'; // Use any logo image you like
import React, { useState } from 'react';
import KundliMatchingForm from './KundliMatchingForm.jsx'; // add this line
import Horoscope from './Horoscope';


function Dashboard({ onLogout }) {
  const handleAuthClick = () => {
    onLogout(); // This will go back to Auth page
  };
const [showKundliForm, setShowKundliForm] = useState(false);
const [currentPage, setCurrentPage] = useState('home'); 


if (showKundliForm) {
    // Show Kundli form instead of dashboard content
    return <KundliMatchingForm onBack={() => setShowKundliForm(false)} />;
  }


if (currentPage === 'horoscope') {
  return <Horoscope onBack={() => setCurrentPage('home')} />;
}


  const services = [
    {
      key: 'horoscope',
      title: 'Horoscope',
      description: 'Get your daily horoscope and astrological predictions.',
      icon: '🔮',
    },
    {
      key: 'kundali',
      title: 'Kundali Matching',
      description: 'Match kundalis for marriage compatibility and dosha check.',
      icon: '❤️',
    },
    {
      key: 'blog',
      title: 'Astrology Blog',
      description: 'Read blogs on astrology, zodiac signs, planets and more.',
      icon: '📚',
    },
  ];

  const astrologers = [
    {
      id: 1,
      name: 'Astro Shisir',
      image: image1,
      rating: 4.5,
      reviews: 120,
      description: 'Expert in Vedic Astrology, providing insights and guidance for all zodiac signs.',
    },
    {
      id: 2,
      name: 'Astro Priya',
      image: image2,
      rating: 4.8,
      reviews: 200,
      description: 'Specializes in horoscope analysis, Kundali matching, and more.',
    },
    {
      id: 3,
      name: 'Astro Manish',
      image: image3,
      rating: 4.2,
      reviews: 95,
      description: 'Famous for his accurate predictions and spiritual guidance.',
    },
  ];


const pujas = [
  {
    id: 1,
    title: 'Satyanarayan Puja',
    description: 'Perform Satyanarayan Vrat for happiness and prosperity in your home.',
    image: narayanImg,
  },
  {
    id: 2,
    title: 'Rudrabhishek Puja',
    description: 'Offer prayers to Lord Shiva to remove obstacles and gain blessings.',
    image: rudraImg,
  },
  {
    id: 3,
    title: 'Navgraha Puja',
    description: 'Appease all nine planets for better health and fortune.',
    image: navgrahImg,
  },
];

  return (
    <div className="min-h-screen bg-white">
      
      
       {/* Navbar */}
<nav className="bg-purple-700 text-white px-6 py-4 shadow-md flex items-center justify-between flex-wrap gap-4">
  {/* Logo + Title */}
  <div className="flex items-center gap-3">
    <img src={logoImage} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
    <h1 className="text-2xl font-bold">Sanatan AstroFolks</h1>
  </div>


{/* Search Bar */}
<div className="relative w-64">
  <div className="relative text-gray-600 focus-within:text-purple-600">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
      </svg>
    </span>
    <input
      type="search"
      name="q"
      className="w-full py-2 pl-10 pr-4 text-sm text-black bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ease-in-out"
      placeholder="Search services, astrologers..."
      autoComplete="off"
    />
  </div>
</div>


{/* Login / Signup Button */}
<div>
  <button
    onClick={handleAuthClick}
    className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 hover:shadow-md transition duration-300 ease-in-out"
  >
    Login / Signup
  </button>
</div>

</nav>

      {/* Subnav */}
      <div className="bg-white shadow border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-center gap-8 text-sm font-medium text-gray-700">
          <button className="hover:text-purple-700">Home</button>
          <button className="hover:text-purple-700">Astrology</button>
          <button className="hover:text-purple-700">About Us</button>
          <button className="hover:text-purple-700">Solutions</button>
          <button className="hover:text-purple-700">Consultation</button>
          <button className="hover:text-purple-700">Booking</button>
          <button className="hover:text-purple-700">Contact Us</button>
        </div>
      </div>

{/* Services Section - Circle Style */}

<div className="w-full bg-pink-100 py-12">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
    <div className="w-20 h-1 bg-red-500 rounded-full mx-auto mb-10"></div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
      {services.map((service) => (
        <div
          key={service.key}
          className="bg-white w-64 h-64 rounded-full shadow-md hover:shadow-lg transition-all mx-auto flex flex-col items-center justify-center text-center px-4"
        >
          <div className="text-4xl mb-2">{service.icon}</div>
          <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{service.description}</p>
          <button
            onClick={() => {
              if (service.key === 'horoscope') {
                setCurrentPage('horoscope'); // Set current page to 'horoscope'
              } else if (service.key === 'kundali') {
                setShowKundliForm(true); // Show Kundali form (already implemented)
              }
            }}
            className="bg-pink-500 text-white px-4 py-1 text-sm rounded-full hover:bg-pink-600 transition"
          >
            Visit
          </button>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Conditional Rendering for Horoscope */}
{currentPage === 'horoscope' && <Horoscope />} {/* Render Horoscope component here */}




    {/* Astrologers Section */}
<div className="bg-blue-50 py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-center mb-2">Meet Our Astrologers</h2>
<div className="w-20 h-1 bg-red-500 rounded-full mx-auto mb-10"></div>


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
      {astrologers.map((astrologer) => (
        <div
          key={astrologer.id}
          className="bg-white px-6 py-8 rounded-3xl shadow-md w-full max-w-xs hover:shadow-lg transition-all text-center mx-auto"
        >
          <img
            src={astrologer.image}
            alt={astrologer.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">{astrologer.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{astrologer.description}</p>

          <div className="flex items-center justify-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(astrologer.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 0 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-500 text-sm">{astrologer.reviews} Reviews</span>
          </div>

          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
            Contact
          </button>
        </div>
      ))}
    </div>
  </div>
</div>
  
      
{/* Book a Puja Section with Centered Circle Image */}
<div className="bg-yellow-50 py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-3xl font-bold text-center mb-2">Book a Puja</h2>
<div className="w-20 h-1 bg-red-500 rounded-full mx-auto mb-10"></div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
      {pujas.map((puja) => (
        <div
          key={puja.id}
          className="bg-white px-6 py-8 rounded-3xl shadow-md w-full max-w-xs hover:shadow-lg transition-all text-center mx-auto"
        >
          {/* Title Above Image */}
          <h3 className="text-xl font-semibold mb-3">{puja.title}</h3>

          {/* Centered Circular Image */}
          <div className="flex justify-center mb-4">
            <img
              src={puja.image}
              alt={puja.title}
              className="w-24 h-24 object-cover rounded-full border-4 border-yellow-200 shadow"
            />
          </div>

          {/* Description and Button */}
          <p className="text-sm text-gray-600 mb-4">{puja.description}</p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition">
            Book Now
          </button>
        </div>
      ))}
    </div>
  </div>
</div>


{/* As Seen On Section */}

<div className="bg-[#2C112D] pt-16 pb-24">


  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-white mb-2">AS SEEN ON</h2>
    <div className="w-20 h-1 bg-red-500 rounded-full mx-auto mb-10"></div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center items-center">
      
      {/* Avenues (Not clickable, but cursor shows pointer) */}
      <div className="bg-white rounded-lg px-6 py-3 shadow-md h-20 flex items-center justify-center cursor-pointer hover:shadow-lg transition">
        <img src={avenuesLogo} alt="Avenues" className="h-10 object-contain" />
      </div>

      {/* Kantipur (Clickable) */}
      <a
        href="https://www.youtube.com/watch?v=KpdYSm3pz08"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-lg px-6 py-3 shadow-md h-20 flex items-center justify-center hover:shadow-lg transition cursor-pointer"
      >
        <img src={kantipurLogo} alt="Kantipur" className="h-10 object-contain" />
      </a>

      {/* News24 (Not clickable, just cursor style) */}
      <div className="bg-white rounded-lg px-6 py-3 shadow-md h-20 flex items-center justify-center cursor-pointer hover:shadow-lg transition">
        <img src={news24Logo} alt="News 24" className="h-10 object-contain" />
      </div>

      {/* Prime TV (Not clickable, just cursor style) */}
      <div className="bg-white rounded-lg px-6 py-3 shadow-md h-20 flex items-center justify-center cursor-pointer hover:shadow-lg transition">
        <img src={primeLogo} alt="Prime TV" className="h-10 object-contain" />
      </div>
      
    </div>
  </div>

 
</div>
  
<div className="mt-12">
  <Footer />
</div>


    </div>
  );
}

export default Dashboard;

