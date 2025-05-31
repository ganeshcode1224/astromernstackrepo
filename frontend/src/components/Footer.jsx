
// frontend\src\components\Footer.jsx
import React from 'react';
import logo from '../images/image11.png'; // 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div>
          <img src={logo} alt="Sanatan AstroFolks" className="h-10 mb-4" />
          <p className="text-sm font-semibold">Sanatan AstroFolks Mobile Apps</p>
          <div className="flex gap-2 my-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
           
          </div>
          <p className="mt-4">Follow us on</p>
          <div className="flex gap-3 mt-2">
            <span className="text-xl cursor-pointer hover:text-blue-500">📘</span>
            <span className="text-xl cursor-pointer hover:text-red-500">📺</span>
            <span className="text-xl cursor-pointer hover:text-pink-500">📸</span>
            <span className="text-xl cursor-pointer hover:text-black">✖️</span>
          </div>
        </div>

        {/* Center Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Chat with Astrologer</li>
            <li>Astrologer</li>
            <li>Tarot Readers</li>
            <li>Numerologist</li>
            <li>Vastu Experts</li>
            <li>Fengshui Astrologer</li>
            <li>Love Astrologer</li>
            <li>Financial Astrologer</li>
            <li>Marriage Astrologer</li>
            <li>Free Astrology Consultation</li>
            <li>Horoscope 2025</li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Astrologer Registration</li>
            <li>Partner Us</li>
            <li>Career</li>
            <li>Site Map</li>
            <li>Karma & Destiny</li>
            <li>Refund Policy</li>
            <li>Astroyogi Academy</li>
            <li>Media Coverage</li>
            <li>Authors</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-6 text-sm flex justify-between items-center">
        <p>© Sanatan AstroFolks Pvt. Ltd. 2025. All rights reserved</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">T&C</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
