import { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Signing in with:", { username, password, role });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome to AAiT's PhD Progress Monitoring</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium mb-1">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div>
            <label htmlFor="role" className="block font-medium mb-1">Select Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="student">Student</option>
              <option value="advisor">Advisor</option>
              <option value="dean">Dean</option>
              <option value="PG_coordinator">PG Coordinator</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
