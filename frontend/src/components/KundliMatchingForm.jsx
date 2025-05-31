// frontend\src\components\KundliMatchingForm.jsx
import React, { useState } from 'react';
import logoImage from '../images/image11.png';

function KundliMatchingForm() {
  const [formData, setFormData] = useState({
    ayanamsa: 1,
    girl_coordinates: '',
    girl_dob: '',
    boy_coordinates: '',
    boy_dob: '',
  });

  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAuthClick = () => {
    console.log("Login / Signup clicked");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/astrology/kundli-matching', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          girl_dob: new Date(formData.girl_dob).toISOString(),
          boy_dob: new Date(formData.boy_dob).toISOString(),
        }),
      });
      const json = await res.json();

      if (json.data) {
        setResultData(json.data);
      } else {
        alert('Error fetching data');
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
    setLoading(false);
  };

  const handleBack = () => {
    setResultData(null);
  };

  const filterId = (data) => {
    return Object.entries(data).filter(([key]) => key !== "_id").reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
  };

  const InfoTable = ({ title, details }) => {
    const filteredDetails = filterId(details);
    return (
      <div className="mb-6 p-4 bg-white rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-gray-600 font-semibold">Attribute</th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(filteredDetails).map(([key, value]) => (
              <tr key={key} className="border-t border-gray-200">
                <td className="px-6 py-3 text-gray-700">{key}</td>
                <td className="px-6 py-3 text-gray-700">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Navbar + Subnav JSX
  const Navbar = () => (
    <>
      {/* NAVBAR */}
      <nav className="bg-purple-700 text-white px-6 py-4 shadow-md flex items-center justify-between flex-wrap gap-4">
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

        <div>
          <button
            onClick={handleAuthClick}
            className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 hover:shadow-md transition duration-300 ease-in-out"
          >
            Login / Signup
          </button>
        </div>
      </nav>

      {/* SUBNAV */}
      <div className="bg-white shadow border-b border-gray-200 mb-8">
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
    </>
  );

  if (loading) return (
    <>
      <Navbar />
      <div className="text-center p-10">Loading...</div>
    </>
  );

  if (resultData) {
    const { girl_info, boy_info, message, guna_milan } = resultData;

    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-2xl space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-700">Kundli Matching Results</h2>

          {/* Girl's Details */}
          <InfoTable title="Girl's Details" details={girl_info.koot} />

          {/* Boy's Details */}
          <InfoTable title="Boy's Details" details={boy_info.koot} />

          {/* Guna Milan Summary */}
          <section className="mb-6 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Guna Milan Score</h3>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">
                {guna_milan.total_points} / {guna_milan.maximum_points} points
              </p>
            </div>
          </section>

          {/* Match Advice */}
          <section
            className={`mb-6 p-6 rounded-lg border-l-4 ${
              message.type === 'bad' ? 'border-red-500 bg-red-50' : 'border-green-500 bg-green-50'
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Match Advice</h3>
            <p className="text-gray-700">{message.description}</p>
          </section>

          {/* Back to Form Button */}
          <button
            onClick={handleBack}
            className="py-2 px-4 text-sm bg-gray-500 text-white rounded-md shadow-sm opacity-60 mt-6"
            style={{ fontSize: '14px' }}
          >
            Back to Form
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center text-purple-600">Kundli Matching Form</h2>

        <div className="space-y-4">
          <label className="block font-medium text-gray-700">Ayanamsa</label>
          <input
            type="number"
            min={0}
            max={10}
            value={formData.ayanamsa}
            onChange={(e) => setFormData({ ...formData, ayanamsa: Number(e.target.value) })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />

          <label className="block font-medium text-gray-700">Girl Coordinates (lat, long)</label>
          <input
            type="text"
            value={formData.girl_coordinates}
            onChange={(e) => setFormData({ ...formData, girl_coordinates: e.target.value })}
            placeholder="e.g. 23.1765,75.7885"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />

          <label className="block font-medium text-gray-700">Girl Date of Birth & Time</label>
          <input
            type="datetime-local"
            value={formData.girl_dob}
            onChange={(e) => setFormData({ ...formData, girl_dob: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />

          <label className="block font-medium text-gray-700">Boy Coordinates (lat, long)</label>
          <input
            type="text"
            value={formData.boy_coordinates}
            onChange={(e) => setFormData({ ...formData, boy_coordinates: e.target.value })}
            placeholder="e.g. 23.1765,75.7885"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />

          <label className="block font-medium text-gray-700">Boy Date of Birth & Time</label>
          <input
            type="datetime-local"
            value={formData.boy_dob}
            onChange={(e) => setFormData({ ...formData, boy_dob: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            Get Match Result
          </button>
        </div>
      </form>
    </>
  );
}

export default KundliMatchingForm;
