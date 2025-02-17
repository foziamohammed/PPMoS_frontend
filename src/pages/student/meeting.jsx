
import axios from "axios";
import React, { useEffect, useState } from "react";

const Meeting = () => {
  const [tasks, setTasks] = useState(["", "", ""]);
  const [formData, setFormData] = useState({
    supervisor: "",
    date: "",
    time: "",
    agenda: "",
    place: "",
  });
  const [bookedMeetings, setBookedMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("http://localhost:8000/api/meetings/students/"+ user.id +"/schedules")

  // Fetch approved meetings for the student
  useEffect(() => {
    const fetchApprovedMeetings = async () => {
      try {
        console.log("Fetching approved meetings...");
        const response = await axios.get("http://localhost:8000/api/meetings/students/"+ user.id +"/schedules");
        console.log("Approved Meetings Response:", response.data);

        // Ensure the response is an array
        if (Array.isArray(response.data)) {
          console.log(response.data)
          setBookedMeetings(response.data);
        } else {
          console.error("Unexpected API response format:", response.data);
          setError("Failed to fetch approved meetings. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching approved meetings:", error);
        setError("Failed to fetch approved meetings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchApprovedMeetings();
  }, []);

  const handleInputChange = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const meetingData = {
      user: {
        name: user.name || "estifanos",
        id: user.id,
      },
      advisorId: formData.supervisor,
      dateTime: new Date(`${formData.date}T${formData.time}`).toISOString(),
      agenda: formData.agenda,
      place: formData.place,
    };

    try {
      console.log("Sending meeting request...");
      const response = await axios.post("http://localhost:8000/api/meetings/createmeeting", meetingData);
      console.log("Meeting request sent:", response.data);
      alert("Meeting request sent successfully!");
      setFormData({ supervisor: "", date: "", time: "", agenda: "", place: "" });
    } catch (error) {
      console.error("Error sending meeting request:", error);
      alert("Failed to send meeting request.");
    }
  };

  console.log("Rendering Meeting component...");

  return (
    <div className="p-8 font-sans">
      {/* Top Section */}
      <div className="flex gap-12">
        {/* Meeting Form */}
        <div className="w-1/2">
          <h1 className="font-semibold mb-6 text-lg">Book a date for a meeting</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-4">
              <label htmlFor="supervisor" className="w-28 font-medium">
                Supervisor:
              </label>
              <input
                type="text"
                id="supervisor"
                value={formData.supervisor}
                onChange={handleFormChange}
                className="border rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="date" className="w-28 font-medium">
                Date:
              </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleFormChange}
                className="border rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>


            <div className="flex items-center space-x-4">
              <label htmlFor="time" className="w-28 font-medium">
                Time:
              </label>
              <input
                type="time"
                id="time"
                value={formData.time}
                onChange={handleFormChange}
                className="border rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="agenda" className="w-28 font-medium">
                Agenda:
              </label>
              <input
                type="text"
                id="agenda"
                value={formData.agenda}
                onChange={handleFormChange}
                className="border rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="place" className="w-28 font-medium">
                Place:
              </label>
              <input
                type="text"
                id="place"
                value={formData.place}
                onChange={handleFormChange}
                className="border rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md"
            >
              Request
            </button>
          </form>
        </div>

        {/* Tasks Section */}
        <div className="bg-gray-100 p-4 rounded shadow-md w-1/3">
          <div className="flex justify-between items-center mb-2">
            <h1 className="font-semibold">Tasks</h1>
            <button>
              <img
                src="https://img.icons8.com/ios/24/000000/edit--v1.png"
                alt="edit"
              />
            </button>
          </div>
          <ol className="space-y-2 text-gray-600">
            {tasks.map((task, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="font-medium">{index + 1}.</span>
                <input
                  type="text"
                  placeholder={`Task ${index + 1}`}
                  value={task}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="border-b-2 w-full focus:outline-none focus:border-blue-400"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Booked Meetings */}
      <div className="mt-12">
        <h1 className="font-semibold mb-4 text-lg">Booked Meetings</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : bookedMeetings.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2">Agenda</th>
                <th className="py-2">Date</th>
                <th className="py-2">Time</th>
                <th className="py-2">Place</th>
              </tr>
            </thead>
            <tbody>
              {bookedMeetings.map((meeting, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{meeting.agenda}</td>
                  <td className="py-2">{new Date(meeting.dateTime).toLocaleDateString()}</td>
                  <td className="py-2">{new Date(meeting.dateTime).toLocaleTimeString()}</td>
                  <td className="py-2">{meeting.place}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No booked meetings found.</p>
        )}
      </div>
    </div>
  );
};


export default Meeting;
