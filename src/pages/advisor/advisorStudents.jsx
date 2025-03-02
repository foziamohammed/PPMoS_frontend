import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import ManImage from "../../assets/images/Man.jpg";
import { useState } from "react";
import axios from "axios";

const AdvisorStudents = () => {
  const [students, setStudents] = useState([
    {
      _id: 0,
      name: "Loading...",
      course: "Loading...",
      year: "Loading...",
      email: "Loading...",
      status: "Loading...",
    },
  ]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/gets",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setStudents(response.data.students);
      } catch (error) {
        console.error("Error fetching students:", error);
        setStudents([
          {
            _id: 0,
            name: "Error",
            course: "Error",
            year: "Error",
            email: "Error",
            status: "Error",
          },
        ]);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="p-5 h-screen">
      <h1 className="text-2xl mb-4 font-bold">My Students</h1>

      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-16 p-4 text-base font-semibold tracking-wide text-left">
                No.
              </th>
              <th className="sm:min-w-[250px] min-w-[200px] p-4 text-base font-semibold tracking-wide text-left">
                Students
              </th>
              <th className="min-w-[200px] p-4 text-base font-semibold tracking-wide text-left">
                Course
              </th>
              <th className="w-20 p-4 text-base font-semibold tracking-wide text-left">
                Year
              </th>
              <th className="w-32 p-4 text-base font-semibold tracking-wide text-left">
                Email
              </th>
              <th className="w-24 p-4 text-base font-semibold tracking-wide text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student, index) => (
              <tr key={student._id || index} className="bg-white">
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  <Link
                    to={`/advisor/student-details/${student._id}`}
                    className="font-bold text-blue-500 hover:underline"
                  >
                    00{index + 1}
                  </Link>
                </td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={ManImage}
                      alt="Sample"
                      className="w-14 h-14 rounded-full mr-4"
                    />
                    <span>
                      {student.firstName + " " + student.lastName ||
                        "Not provided"}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  {student.course || "Not provided"}
                </td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  {student.year || "Not provided"}
                </td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  {student.email || "Not provided"}
                </td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  <span className="p-2 text-sm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    {student.status || "Not provided"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvisorStudents;
