import axios from "axios";
import React, { useEffect, useState } from "react";

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
  const user = JSON.parse(localStorage.getItem("user"));

  // Handle Approve (UI only)
  const handleApprove = async (requestId) => {
    try {
        console.log("Approving...");
        let response = await axios.put("http://localhost:8000/api/meetings/"+requestId+"/approve");
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error fetching approved meetings:", error);
      }

    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request._id === requestId ? { ...request, status: "approved" } : request
      )
    );
  };

  // Handle Decline (UI only)
  const handleDecline = async (requestId) => {
    try {
        console.log("Approving...");
        let response = await axios.put("http://localhost:8000/api/meetings/"+requestId+"/decline");
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error fetching approved meetings:", error);
      }

    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request._id === requestId ? { ...request, status: "declined" } : request
      )
    );
  };

  useEffect(() => {
    const fetchApprovedMeetings = async () => {
      try {
        let meetings = []
        console.log("Fetching meetings...");
        let response = await axios.get("http://localhost:8000/api/meetings/advisors/"+ user.id);
        console.log("Meetings Response:", response.data.requests);

        // Ensure the response is an array
        if (Array.isArray(response.data.requests)) {
          meetings = response.data.requests;
        } else {
          console.error("Unexpected API response format:", response.data);
        }

        console.log("Fetching meetings...");
        response = await axios.get("http://localhost:8000/api/meetings/advisors/"+ user.id + "/schedules");
        console.log("Meetings Response:", response.data.schedules);

        // Ensure the response is an array
        if (Array.isArray(response.data.schedules)) {
          meetings = [...meetings, ...response.data.schedules]
        } else {
          console.error("Unexpected API response format:", response.data);
        }

        console.log(meetings)
        setRequests(meetings);
      } catch (error) {
        console.error("Error fetching approved meetings:", error);
      }
    };

    fetchApprovedMeetings();
  }, []);

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
