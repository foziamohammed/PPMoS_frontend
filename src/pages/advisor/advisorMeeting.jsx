import React, { useState } from "react";

const AdvisorDashboard = () => {
  // Dummy data for UI testing
  const [requests, setRequests] = useState([
    {
      _id: "1",
      studentName: "John Doe",
      dateTime: new Date().toISOString(),
      status: "pending",
    },
    {
      _id: "2",
      studentName: "Jane Smith",
      dateTime: new Date().toISOString(),
      status: "pending",
    },
  ]);

  // Handle Approve (UI only)
  const handleApprove = (requestId) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request._id === requestId ? { ...request, status: "approved" } : request
      )
    );
  };

  // Handle Decline (UI only)
  const handleDecline = (requestId) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request._id === requestId ? { ...request, status: "declined" } : request
      )
    );
  };

  return (
    <div className="p-8 font-sans">
      <h1 className="font-semibold mb-6 text-lg">Advisor Dashboard</h1>

      {requests.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2">Student Name</th>
              <th className="py-2">Date & Time</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request._id} className="border-b">
                <td className="py-2">{request.studentName}</td>
                <td className="py-2">{new Date(request.dateTime).toLocaleString()}</td>
                <td className="py-2">{request.status}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleApprove(request._id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDecline(request._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                  >
                    Decline
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No meeting requests found.</p>
      )}
    </div>
  );
};

export default AdvisorDashboard;
