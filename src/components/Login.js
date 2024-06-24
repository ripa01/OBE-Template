import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../image/logo02.png";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <body className="font-poppins h-screen w-screen flex flex-col bg-white">
      <div id="body" className="h-full lg:mx-24 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-around items-center gap-8 mb-16">
          <div id="registerForm" className="h-full col-span-2 flex flex-col justify-center bg-indigo-100 rounded-2xl px-4 py-8 shadow-xl border-2 border-black">
            <form method="POST" onSubmit={handleLogin}>
              <div className="flex flex-col justify-center items-center gap-4">
                <img src={logo} alt="Login" className="w-24 h-24" />
                <h1 className="text-primary text-3xl font-bold mb-2">OBE Master</h1>
                <p className="text-gray-500 text-sm text-center px-8 pb-4">
                  Login using your username and password.
                </p>
                <input
                  type="text"
                  className="text-sm w-4/5 h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Username"
                  name="username"
                />
                <input
                  type="password"
                  className="text-sm w-4/5 h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Password"
                  name="password"
                />
                <button
                  type="submit"
                  className="text-sm bg-white mt-2 h-12 w-4/5 rounded-2xl text-primary font-bold hover:bg-primary hover:text-white border-primary border-2"
                >
                  Login
                </button>
                <p className="mt-2 text-grey-500 text-sm">
                  Don't have an account?
                  <Link to="/register" className="text-primary font-bold hover:text-secondary">
                    Create an Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
