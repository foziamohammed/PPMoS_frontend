import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Profile from "../../assets/images/Man.jpg";

const StudentDetails = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState({
    _id: 0,
    firstName: "Loading...",
    lastName: "Loading...",
    idNo: "Loading...",
    specialization: "Loading...",
    email: "Loading...",
    program: "Loading...",
    year: "Loading...",
    researchArea: "Loading...",
    imageUrl: "default-image-url.jpg",
  });
  const [currentMilestone, setCurrentMilestone] = useState({
    stage: "",
    title: "",
    description: "",
    requirement: "",
    deadline: "",
    status: "",
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchMilestoneData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/milestones/get/${studentId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const milestone = response.data.milestone;

        setCurrentMilestone({
          _id: milestone._id,
          stage: milestone.stage,
          title: milestone.title,
          description: milestone.description,
          requirement: milestone.requirement,
          deadline: milestone.dueDate,
          status: milestone.status,
        });
      } catch (error) {
        console.error("Error fetching milestone data:", error);
      }
    };

    fetchMilestoneData();

    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/get/${studentId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };

    fetchStudentDetails();
  }, [studentId, token]);

  if (!student) {
    return <p>Loading...</p>;
  }

  const [filter, setFilter] = useState({
    postedAt: "",
    paperType: "",
    supervisor: "",
  });

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="bg-white w-full p-6 shadow-lg rounded-lg">
      <div className="flex gap-20 mt-10">
        <div className="flex-grow">
          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="flex items-center gap-20 mt-10">
                <div className="grid">
                  <img
                    src={student.imageUrl || Profile}
                    className="h-44 w-44 rounded-full shadow-md"
                    alt="Student"
                  />
                  <p className="text-blue-500 font-semibold text-xl mt-4 text-center">
                    {student.firstName + " " + student.lastName ||
                      "Not Provided"}
                  </p>
                  <p className="text-center text-gray-600">
                    {student.idNo || "Not Provided"}
                  </p>
                </div>
                <div className="space-y-6 text-base">
                  <p>
                    <span className="text-blue-600 font-semibold">
                      Department:
                    </span>{" "}
                    {student.specialization || "Not Provided"}
                  </p>
                  <p>
                    <span className="text-blue-600 font-semibold">Email:</span>{" "}
                    {student.email || "Not Provided"}
                  </p>
                  <p>
                    <span className="text-blue-600 font-semibold">
                      Program:
                    </span>{" "}
                    {student.program || "Not Provided"}
                  </p>
                  <p>
                    <span className="text-blue-600 font-semibold">Year:</span>{" "}
                    {student.year || "Not Provided"}
                  </p>
                  <p>
                    <span className="text-blue-600 font-semibold">
                      Research Area:
                    </span>{" "}
                    {student.researchArea || "Not Provided"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Section */}
        <div className="flex-shrink-0 w-80 border rounded-lg shadow-lg p-4 bg-gray-100">
          <h2 className="text-blue-600 font-semibold text-lg mb-4">
            Milestone
          </h2>
          <p>
            <span className="font-semibold">Milestone Stage:</span>{" "}
            {currentMilestone.stage || "Not provided"}
          </p>
          <p>
            <span className="font-semibold">Current Milestone:</span>{" "}
            {currentMilestone.title || "Not provided"}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {currentMilestone.description || "Not provided"}
          </p>
          <p>
            <span className="font-semibold">Requirement:</span>{" "}
            {currentMilestone.requirement || "Not provided"}
          </p>
          <p>
            <span className="font-semibold">Deadline:</span>{" "}
            {currentMilestone.deadline
              ? new Date(currentMilestone.deadline).toLocaleDateString()
              : "Not provided"}
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            {currentMilestone.status || "Not provided"}
          </p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-20 w-full shadow-md hover:bg-blue-700"
            onClick={() =>
              navigate(
                `/milestone_form/${currentMilestone._id + "!" + studentId}`
              )
            }
          >
            Edit Milestone
          </button>
        </div>
      </div>

      {/* Filters and Documents */}
      <div className="mt-10">
        <h3 className="font-semibold text-lg text-blue-600">
          Received Documents
        </h3>
        <div className="flex items-center space-x-4 mt-5">
          <select
            name="postedAt"
            className="border rounded-md p-1 text-sm w-40 shadow-sm"
            onChange={handleFilterChange}
            value={filter.postedAt}
          >
            <option value="">Posted At</option>
            <option value="lastWeek">Last Week</option>
            <option value="lastMonth">Last Month</option>
          </select>
          <select
            name="paperType"
            className="border rounded-md p-1 text-sm w-40 shadow-sm"
            onChange={handleFilterChange}
            value={filter.paperType}
          >
            <option value="">Paper Type</option>
            <option value="researchPaper">Research Paper</option>
            <option value="thesis">Thesis</option>
          </select>
          <select
            name="supervisor"
            className="border rounded-md p-1 text-sm w-40 shadow-sm"
            onChange={handleFilterChange}
            value={filter.supervisor}
          >
            <option value="">Supervisor</option>
            <option value="Dr. Kebede">Dr. Kebede</option>
            <option value="Dr. Abebe">Dr. Abebe</option>
          </select>
        </div>

        <div className="mt-6">
          <h4 className="text-blue-600 font-semibold text-lg">Documents</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {documents.map((document) => (
              <div
                key={document.id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <h5 className="text-gray-800 font-semibold">
                  {document.title}
                </h5>
                <p className="text-gray-600 text-sm">{document.description}</p>
                <div className="flex justify-end mt-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="bg-blue-600 text-white p-2 rounded-lg mt-4 w-full shadow-md hover:bg-blue-700">
          See More
        </button>
      </div>
    </main>
  );
};

export default StudentDetails;
