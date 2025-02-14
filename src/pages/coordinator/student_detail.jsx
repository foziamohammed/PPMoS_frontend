import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Profile from '../../assets/images/Man.jpg';
import DocumentImage from '../../assets/images/placeholder.jpg';

const StudentDetail = () => {
  const { studentId } = useParams();
  const navigate = useNavigate(); // Use navigate hook

  const students = {
    '001': {
      name: 'Sara Kebede',
      id: 'Phd/5489/16',
      department: 'School of Information Technology',
      email:'abebe@gmail.com',
      program: 'Phd in Software Engineering',
      year: '3',
      reasearchArea: 'Artificial Intelligence',
      imageUrl: Profile,
    },
    '002': {
      name: 'Abebe Kebede',
      id: 'Phd/1234/19',
      department: 'Software Engineering',
      email:'abebe@gmail.com',
      program: 'Phd in Software Engineering',
      year: '3',
      reasearchArea: 'Machine learning',
      imageUrl: Profile,
    },
  };

  const student = students[studentId];

  if (!student) {
    return <p>Student not found</p>;
  }

  const [filter, setFilter] = useState({ postedAt: '', paperType: '', supervisor: '' });

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
            <div className="flex items-center gap-20 mt-10">
              <div className="grid">
                <img
                  src={student.imageUrl}
                  className="h-44 w-44 rounded-full shadow-md"
                  alt="Student"
                />
                <p className="text-blue-500 font-semibold text-xl mt-4 text-center">{student.name}</p>
                <p className="text-center text-gray-600">{student.id}</p>
              </div>
              <div className="space-y-6 text-base">
                <p><span className="text-blue-600 font-semibold">Department:</span> {student.department}</p>
                <p><span className="text-blue-600 font-semibold">Email:</span> {student.email}</p>
                <p><span className="text-blue-600 font-semibold">Program:</span> {student.program}</p>
                <p><span className="text-blue-600 font-semibold">Year:</span> {student.year}</p>
                <p><span className="text-blue-600 font-semibold">Research Area:</span> {student.reasearchArea}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Section */}
        <div className="flex-shrink-0 w-80 border rounded-lg shadow-lg p-4 bg-gray-100">
          <h2 className="text-blue-600 font-semibold text-lg mb-4">Milestone</h2>
          <p><span className="font-semibold">Milestone Stage:</span> 1</p>
          <p><span className="font-semibold">Current Milestone:</span> Proposal submission</p>
          <p><span className="font-semibold">Description:</span> Lorem ipsum let dow</p>
          <p><span className="font-semibold">Deadline:</span> March 3, 2025</p>
        
        </div>
      </div>

      {/* Filters and Documents */}
      <div className="mt-10">
        <h3 className="font-semibold text-lg text-blue-600">Received Documents</h3>
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
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={DocumentImage}
                  alt="Document"
                  className="h-20 w-20 object-cover rounded-md shadow-sm"
                />
                <h5 className="text-sm mt-2">Document {i}</h5>
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

export default StudentDetail;
