import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import ManImage from '../../assets/images/Man.jpg';

const CoordinatorStudents = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const students = [
    { id: '001', name: 'Abebe Kebede', course: 'Artificial Intelligence', year: 3, email: 'abebe@gmail.com', status: 'Delivered', department: 'Computer Science' },
    { id: '002', name: 'Biruk Alemayehu', course: 'Machine Learning', year: 4, email: 'biruk@gmail.com', status: 'Pending', department: 'Software Engineering' },
    { id: '003', name: 'Chala Tadesse', course: 'Data Science', year: 2, email: 'chala@gmail.com', status: 'Overdue', department: 'Data Science' },
  ];

  const departments = ['All', ...new Set(students.map((student) => student.department))];

  const filteredStudents = selectedDepartment === 'All'
    ? students
    : students.filter(student => student.department === selectedDepartment);

  return (
    <div className="p-5 h-screen">
      <h1 className="text-2xl mb-4 font-bold">My Students</h1>

      {/* Department Filter */}
      <div className="mb-4">
        <label className="font-semibold mr-2">Filter by Department:</label>
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="border p-2 rounded"
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Student Table */}
      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-16 p-4 text-base font-semibold tracking-wide text-left">No.</th>
              <th className="sm:min-w-[250px] min-w-[200px] p-4 text-base font-semibold tracking-wide text-left">Students</th>
              <th className="min-w-[200px] p-4 text-base font-semibold tracking-wide text-left">Course</th>
              <th className="w-20 p-4 text-base font-semibold tracking-wide text-left">Year</th>
              <th className="w-32 p-4 text-base font-semibold tracking-wide text-left">Email</th>
              <th className="w-24 p-4 text-base font-semibold tracking-wide text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredStudents.map((student, index) => (
              <tr key={student.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  <Link to={`/coordinator/student_detail/${student.id}`} className="font-bold text-blue-500 hover:underline">
                    {student.id}
                  </Link>
                </td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  <div className="flex items-center">
                    <img src={ManImage} alt="Sample" className="w-14 h-14 rounded-full mr-4" />
                    <span>{student.name}</span>
                  </div>
                </td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">{student.course}</td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">{student.year}</td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">{student.email}</td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  <span
                    className={`p-2 text-sm font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${
                      student.status === 'Delivered' ? 'text-green-800 bg-green-200' :
                      student.status === 'Pending' ? 'text-yellow-800 bg-yellow-200' :
                      'text-red-800 bg-red-200'
                    }`}
                  >
                    {student.status}
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

export default CoordinatorStudents;
