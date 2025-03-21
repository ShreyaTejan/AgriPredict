import React, { useState } from 'react';
import signup from '../assets/signin.jpg';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    
    // Add signup logic here
    console.log('Signup attempt with:', email, password);
  };

  const handleNavigation = (path, e) => {
    e.preventDefault();
    window.location.href = path;
  };

  return (
    <div className="h-screen w-full flex justify-center items-center"
         style={{
           backgroundImage: `url(${signup})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
           fontFamily: "'Arial', sans-serif",
         }}>
      <div className="w-full max-w-md p-10 rounded-3xl"
           style={{
             background: "rgba(74, 85, 104, 0.4)",
             backdropFilter: "blur(5px)",
             borderRadius: "30px",
             border: "1px solid rgba(255, 255, 255, 0.1)"
           }}>
        <h1 className="text-white text-4xl font-light text-center mb-10">Sign Up</h1>
        
        <form onSubmit={handleSignup}>
          <div className="mb-8">
            <input 
              type="email" 
              placeholder="Email" 
              className="text-xl bg-transparent border-b border-white text-white w-full pb-1 outline-none"
              style={{ 
                background: "transparent",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none"
              }} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-8">
            <input 
              type="password" 
              placeholder="Password" 
              className="text-xl bg-transparent border-b border-white text-white w-full pb-1 outline-none" 
              style={{ 
                background: "transparent",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none"
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-8">
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className={`text-xl bg-transparent border-b ${!passwordsMatch ? 'border-red-500' : 'border-white'} text-white w-full pb-1 outline-none`}
              style={{ 
                background: "transparent",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none"
              }}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordsMatch(true);
              }}
              required
            />
            {!passwordsMatch && (
              <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
            )}
          </div>
          
          <button 
            type="submit"
            className="w-full bg-[#5cddfa] hover:bg-[#4acce9] text-black py-3 rounded-full text-xl mb-4"
          >
            Sign Up
          </button>
        </form>
        
        <div className="text-white text-center mb-6">or Sign Up with</div>
        
        <div className="flex justify-center gap-6 mb-8">
          <button 
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
            onClick={() => console.log('Google signup')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center"
            onClick={() => console.log('Facebook signup')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="white" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
        </div>
        
        <div className="text-white text-center">
          Already have an account?{' '}
          <a 
            href="/login" 
            onClick={(e) => handleNavigation('/login', e)}
            className="text-[#5cddfa] hover:underline"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;