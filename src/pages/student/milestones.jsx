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

  useEffect(() => {
    // Fetch milestone data from the backend
    const fetchMilestoneData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:5000/api/milestones/get`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
        <h2 className="text-xl font-bold mb-4">Stage 1</h2>
        <ul className="text-gray-700">
          <li>Course completion</li>
          <li>Identify Area of Research</li>
          <li>Develop and Defend Research proposal</li>
        </ul>

        <h2 className="text-xl font-bold mt-6">Stage 2</h2>
        <ul className="text-gray-700">
          <li>Completion of Seminar work</li>
          <li className="text-red-500 font-bold">Progress presentation 1</li>
          <li className="text-gray-400">Prepare and draft preliminary publication</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 text-gray-400">Stage 3</h2>
        <ul className="text-gray-400">
          <li>Conduct advanced experiments</li>
          <li>Generate results and prepare research paper</li>
          <li>Progress presentation 2</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 text-gray-400">Stage 4</h2>
        <ul className="text-gray-400">
          <li>Prepare and submit PhD progress to SGC</li>
          <li>Submit final dissertation</li>
          <li>Defend the dissertation</li>
        </ul>
      </div>

      {/* Center - Current Milestone */}
      <div className="w-1/2 mx-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Current Milestone</h2>

        <h3 className="text-lg text-red-500 font-bold mt-4">{currentMilestone.title}</h3>
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
          <strong>Deadline:</strong> {new Date(currentMilestone.deadline).toLocaleDateString()}
        </p>
        <p className={`mt-2 font-semibold ${currentMilestone.status === "Pending" ? "text-yellow-500" : "text-green-500"}`}>
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