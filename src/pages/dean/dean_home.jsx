import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaClipboardList, FaCalendarAlt } from "react-icons/fa";

const DeanHome = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, Dean</h1>
      <p className="text-gray-600">Manage student progress, advisor reports, and meetings efficiently.</p>

      {/* Dashboard Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
          <FaUserGraduate size={30} />
          <div>
            <h2 className="text-xl font-semibold">320</h2>
            <p>Students in Progress</p>
          </div>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
          <FaChalkboardTeacher size={30} />
          <div>
            <h2 className="text-xl font-semibold">25</h2>
            <p>Advisors</p>
          </div>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
          <FaClipboardList size={30} />
          <div>
            <h2 className="text-xl font-semibold">12</h2>
            <p>Pending Reports</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg shadow flex items-center space-x-3"
            >
            <FaCalendarAlt size={24} className="text-blue-600" />
            <span>Schedule a Meeting</span>
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg shadow flex items-center space-x-3"
           onClick={() => navigate("/dean/document")}>
            <FaClipboardList size={24} className="text-yellow-600" />
            <span>Review Reports</span>
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 p-4 rounded-lg shadow flex items-center space-x-3"
           onClick={() => navigate("/dean/students")}>
            <FaUserGraduate size={24} className="text-green-600" />
            <span>View Students</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeanHome;
