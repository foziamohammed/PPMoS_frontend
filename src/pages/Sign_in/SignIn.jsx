import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn({setRole}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8000/api/auth/login', {
            email,
            password
        });

        setRole(response.data.user.role);
        const userString = JSON.stringify(response.data.user);
        localStorage.setItem('user', userString);
        navigate("/")
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium mb-1">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          
          <button
            type="submit"
            onClick={(e) => {
              handleSignIn(e);
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
