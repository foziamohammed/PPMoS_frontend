import React, { useState } from "react";

const AddMilestone = () => {
  const [formData, setFormData] = useState({
    milestoneStage: "",
    currentMilestone: "",
    description: "",
    requirement: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-6 p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-blue-600">Add Milestone</h2>

      <form className="space-y-4">
        {/* Milestone Stage */}
        <div>
          <label className="block font-semibold text-gray-700">Milestone Stage</label>
          <select
            name="milestoneStage"
            value={formData.milestoneStage}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Stage</option>
            <option value="1">Stage 1</option>
            <option value="2">Stage 2</option>
            <option value="3">Stage 3</option>
            <option value="4">Stage 4</option>
          </select>
        </div>

        {/* Current Milestone */}
        <div>
          <label className="block font-semibold text-gray-700">Current Milestone</label>
          <input
            type="text"
            name="currentMilestone"
            value={formData.currentMilestone}
            onChange={handleChange}
            placeholder="Enter current milestone"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Description</label>
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
          <label className="block font-semibold text-gray-700">Requirement</label>
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
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Submit Milestone
        </button>
      </form>
    </div>
  );
};

export default AddMilestone;
