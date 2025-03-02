import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MilestoneProgress = () => {
  const [progress, setProgress] = useState(0);
  const [currentMilestone, setCurrentMilestone] = useState({
    stage: "",
    title: "",
    description: "",
    requirement: "",
    deadline: "",
    status: "",
  });

  const milestones = [
    [
      "Course completion",
      "Identify Area of Research",
      "Develop and Defend Research proposal",
    ],
    [
      "Completion of Seminar work",
      "Progress presentation 1",
      "Prepare and draft preliminary publication",
    ],
    [
      "Conduct advanced experiments",
      "Generate results and prepare research paper",
      "Progress presentation 2",
    ],
    [
      "Prepare and submit PhD progress to SGC",
      "Submit final dissertation",
      "Defend the dissertation",
    ],
  ];

  useEffect(() => {
    // Fetch milestone data from the backend
    const fetchMilestoneData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:5000/api/milestones/get`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const milestone = response.data.milestone;

        setCurrentMilestone({
          stage: milestone.stage,
          title: milestone.title,
          description: milestone.description,
          requirement: milestone.requirement,
          deadline: milestone.dueDate,
          status: milestone.status,
        });

        setProgress(milestone.status === "completed" ? 100 : 50);
      } catch (error) {
        console.error("Error fetching milestone data:", error);
      }
    };

    fetchMilestoneData();
  }); // Re-fetch data when id changes

  return (
    <div className="flex h-screen p-8 bg-gray-100">
      {/* Left Sidebar - Stages */}
      <div className="w-1/4 bg-white p-6 rounded-lg shadow-lg">
        {milestones.map((stage, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold mb-2 mt-3">Stage {index + 1}</h2>
            <ul className="text-gray-700">
              {stage.map((item, inx) => (
                <li
                  className={
                    item === currentMilestone.title
                      ? "text-red-500 font-bold"
                      : ' className="text-gray-300"'
                  }
                  key={inx}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Center - Current Milestone */}
      <div className="w-1/2 mx-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Current Milestone</h2>

        <h3 className="text-lg text-red-500 font-bold mt-4">
          {currentMilestone.title}
        </h3>
        <p className="mt-2 text-gray-700">
          <strong>Milestone Stage:</strong> {currentMilestone.stage}
        </p>
        <p className="mt-2 text-gray-700">
          <strong>Description:</strong> {currentMilestone.description}
        </p>
        <p className="mt-2 text-gray-700">
          <strong>Requirement:</strong> {currentMilestone.requirement}
        </p>
        <p className="mt-2 text-gray-700">
          <strong>Deadline:</strong>{" "}
          {new Date(currentMilestone.deadline).toLocaleDateString()}
        </p>
        <p
          className={`mt-2 font-semibold ${
            currentMilestone.status === "Pending"
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        >
          <strong>Status:</strong> {currentMilestone.status}
        </p>
      </div>

      {/* Right - Progress Circle */}
      <div className="w-1/4 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-lg font-bold mb-4">Overall Progress</h2>
        <div className="w-32 h-32">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              textColor: "#333",
              pathColor: "#1E3A8A",
              trailColor: "#E5E7EB",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default MilestoneProgress;
