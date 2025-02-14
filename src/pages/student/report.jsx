import React, { useState } from "react";

const DocumentTable = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownPlaceholder, setDropdownPlaceholder] = useState("Select document type");
  const [uploadedFileName, setUploadedFileName] = useState("");

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionSelect = (option) => {
    setDropdownPlaceholder(option); // Update only the dropdown button placeholder
    setDropdownVisible(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };
  const handleSubmit = () => {
    if (!submittedFile || dropdownPlaceholder === "Select document type") {
      alert("Please select a document type and upload a file before submitting.");
      return;
    }

    // Simulating a submission process
    console.log("Submitting file:", submittedFile.name);
    console.log("Document type:", dropdownPlaceholder);

    // Reset the state after submission
    setUploadedFileName("");
    setSubmittedFile(null);
    setDropdownPlaceholder("Select document type");

    alert("File submitted successfully!");
  };

  return (
    <div className="p-6">
      {/* Dropdown and Upload Button */}
      <div className="flex items-center gap-4 mb-4">
        <label className="block font-medium text-gray-700">
          Select document type
        </label>
        <div className="relative">
          <button
            className="flex w-full items-center justify-between rounded border border-gray-300 bg-white px-4 py-2 text-sm leading-tight text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onClick={toggleDropdown}
          >
            {dropdownPlaceholder}
            <span className="ml-2 text-blue-500">▼</span>
          </button>
          {dropdownVisible && (
            <ul className="absolute left-0 mt-2 w-full rounded border border-gray-300 bg-white shadow-lg z-10">
              <li
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                onClick={() => handleOptionSelect("Course Grade")}
              >
                Course Grade
              </li>
              <li
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                onClick={() => handleOptionSelect("Seminar Grade")}
              >
                Seminar Grade
              </li>
              <li
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                onClick={() => handleOptionSelect("Concept Note")}
              >
                Concept Note
              </li>
              <li
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                onClick={() => handleOptionSelect("Draft Proposal")}
              >
                Draft Proposal
              </li>
              <li
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                onClick={() => handleOptionSelect("Approved Proposal")}
              >
                Approved Proposal
              </li>
              <li
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                onClick={() => handleOptionSelect("Research Progress Report")}
              >
                Research Progress Report
              </li>
              <li
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                onClick={() => handleOptionSelect("Publications")}
              >
                Publications
              </li>
              <li
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                onClick={() => handleOptionSelect("Dissertation Submit")}
              >
                Dissertation Submit
              </li>
            </ul>
          )}
        </div>
        <div>
          <label
            htmlFor="file-upload"
            className="rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white cursor-pointer hover:bg-blue-600 focus:outline-none"
          >
            Choose file
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      </div>

      {/* Display uploaded file name */}
      {uploadedFileName && (
        <p className="mb-4 text-sm text-gray-700">
          Uploaded file: <span className="font-medium">{uploadedFileName}</span>
        </p>
      )}
        <div className="mb-4">
        <button
          className="rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {/* Table Section */}
      <div>
        <h2 className="mb-2 text-lg font-semibold">All files</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Document Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Date
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                my courses
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                13-Jan-2025
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                Course grade
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                proposal
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                24-Jan-2025
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                Draft proposal
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                Approved Proposal
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                23-Feb-2025
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                Approved Proposal
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentTable;
