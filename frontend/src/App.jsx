//frontend\src\App.jsx  first dashboard then if click inside go to auth then dash again
// import React, { useState } from 'react';
// import Auth from './components/Auth/Auth.jsx';
// import Dashboard from './components/Dashboard.jsx';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true); // Initially, logged in
//   const handleLogin = () => {
//     setIsLoggedIn(true); // After successful login, go back to Dashboard
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* If logged in, show the Dashboard, otherwise show the Auth page */}
//       {isLoggedIn ? (
//         <Dashboard onLogout={() => setIsLoggedIn(false)} />
//       ) : (
//         <Auth onLogin={handleLogin} />
//       )}
//     </div>
//   );
// }

// export default App;









//frontend\src\App.jsx   test code with extra routing fine one 
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth.jsx';
import Dashboard from './components/Dashboard.jsx';
import Horoscope from './components/Horoscope.jsx';
import KundliMatchingForm from './components/KundliMatchingForm.jsx';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Initially logged in

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Show Auth page if not logged in */}
          {!isLoggedIn && <Route path="*" element={<Auth onLogin={handleLogin} />} />}

          {/* Protected Routes when logged in */}
          {isLoggedIn && (
            <>
              <Route path="/" element={<Dashboard onLogout={handleLogout} />} />
              <Route path="/horoscope" element={<Horoscope />} />
              <Route path="/kundlimatching" element={<KundliMatchingForm />} />



              {/* Default redirect to dashboard */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;














