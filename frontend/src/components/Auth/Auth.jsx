//frontend\src\components\Auth\Auth.jsx fine connected to backend and db
import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [justSignedUp, setJustSignedUp] = useState(false); // New state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
    setJustSignedUp(false);
  };

  const isEmailValid = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isUsernameValid = (username) => /^[A-Za-z][A-Za-z0-9]*$/.test(username);
  const isPasswordStrong = (password) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      if (form.password !== form.confirmPassword) return setError('Passwords do not match!');
      if (!isEmailValid(form.email)) return setError('Please enter a valid email.');
      if (!isUsernameValid(form.name)) return setError('Username must contain letters and cannot be just numbers.');
      if (!isPasswordStrong(form.password))
        return setError('Password must be at least 8 characters long and contain a letter, a number, and a special character.');
    }

    try {
      const url = isLogin
        ? 'http://localhost:5000/api/users/login'
        : 'http://localhost:5000/api/users/signup';

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) return setError(data.message || 'Something went wrong!');

      if (isLogin) {
        localStorage.setItem('token', data.token);
        setSuccess(`Logged in successfully as: ${form.email}`);
        setError('');
        onLogin();
      } else {
        setSuccess('Signed up successfully! Please login now.');
        setError('');
        setJustSignedUp(true);
        setForm({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      }
    } catch {
      setError('Server error! Please try again.');
      setSuccess('');
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setForm({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setError('');
    setSuccess('');
    setJustSignedUp(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      <div className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-xl p-8 sm:p-10 space-y-6 text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">
          {isLogin ? 'Welcome to the Stars' : 'Cosmic Journey'}
        </h2>
        <p className="text-center text-purple-200 text-sm sm:text-base">
          {isLogin
            ? 'Login to explore your astrological insights'
            : 'Sign up to align with Sanatan-AstroFolks'}
        </p>

        {/* Success Message */}
        {!isLogin && justSignedUp && success && (
          <p className="text-green-400 text-center text-sm mt-2">
            {success}
          </p>
        )}
        {/* Login success message */}
        {isLogin && success && (
          <p className="text-green-400 text-center text-sm mt-2">
            {success}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center text-sm mt-2">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-purple-300" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white/5 text-white border border-purple-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-200"
              />
            </div>
          )}
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-purple-300" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white/5 text-white border border-purple-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-200"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-purple-300" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white/5 text-white border border-purple-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-200"
            />
          </div>
          {!isLogin && (
            <div className="relative">
              <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-purple-300" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white/5 text-white border border-purple-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-200"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-purple-200 text-sm">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={toggleAuthMode}
            className="text-purple-400 font-medium hover:underline"
          >
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}






