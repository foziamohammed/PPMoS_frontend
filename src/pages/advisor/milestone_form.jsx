import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddMilestone = () => {
  const { ids } = useParams();
  const [milestoneId, studentId] = ids.split("!");
  const [formData, setFormData] = useState({
    stage: "",
    title: "",
    description: "",
    requirement: "",
    dueDate: "",
    status: "pending",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Get the token from localStorage
      const response = await axios.post(
        `http://localhost:5000/api/milestones/add?edit=${
          milestoneId ? "true" : "false"
        }&id=${milestoneId || studentId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );
      console.log("Milestone added successfully:", response.data);
      // Optionally, you can reset the form or show a success message
      setFormData({
        stage: "",
        title: "",
        description: "",
        requirement: "",
        dueDate: "",
        status: "pending",
      });
    } catch (error) {
      console.error(
        "Error adding milestone:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="space-y-6 p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-blue-600">Add Milestone</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Milestone Stage */}
        <div>
          <label className="block font-semibold text-gray-700">
            Milestone Stage
          </label>
          <select
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Stage</option>
            <option value={0}>Stage 1</option>
            <option value={1}>Stage 2</option>
            <option value={2}>Stage 3</option>
            <option value={3}>Stage 4</option>
          </select>
        </div>

        {/* Current Milestone */}
        <div>
          <label className="block font-semibold text-gray-700">
            Current Milestone
          </label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Milestone</option>
            {milestones[parseInt(formData.stage)]?.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold text-gray-700">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter milestone descriptions"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Requirement */}
        <div>
          <label className="block font-semibold text-gray-700">
            Requirement
          </label>
          <textarea
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            placeholder="Enter milestone requirements"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block font-semibold text-gray-700">Deadline</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Submit Milestone
        </button>
      </form>
    </div>
  );
};

export default AddMilestone;
