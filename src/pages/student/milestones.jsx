import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MilestoneProgress = () => {
  const progress = 30; // Progress percentage

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

        <h3 className="text-lg text-red-500 font-bold mt-4">Progress Presentation 1</h3>
        <p className="mt-2 text-gray-700">
          <strong>Milestone Stage:</strong> Stage 2
        </p>
        <p className="mt-2 text-gray-700">
          <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="mt-2 text-gray-700">
          <strong>Requirement:</strong> Lorem Ipsum dir
        </p>
        <p className="mt-2 text-gray-700">
          <strong>Deadline:</strong> Nov - 29
        </p>
        <p className="mt-2 text-yellow-500 font-semibold">
          <strong>Status:</strong> Pending
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
