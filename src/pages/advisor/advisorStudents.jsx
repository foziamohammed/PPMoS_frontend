import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import ManImage from '../../assets/images/Man.jpg';

const AdvisorStudents = () => {
  return (
    <div className="p-5 h-screen">
      <h1 className="text-2xl mb-4 font-bold">My Students</h1>

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
            <tr className="bg-white">
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                <Link to={`/advisor/student-details/001`} className="font-bold text-blue-500 hover:underline">001</Link>
              </td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                <div className="flex items-center">
                  <img src={ManImage} alt="Sample" className="w-14 h-14 rounded-full mr-4" />
                  <span>Abebe Kebede</span>
                </div>
              </td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">Artificial Intelligence</td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">3</td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">abebe@gmail.com</td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                <span className="p-2 text-sm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  Delivered
                </span>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                <Link to={`/advisor/student-details/002`} className="font-bold text-blue-500 hover:underline">002</Link>
              </td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                <div className="flex items-center">
                  <img src={ManImage} alt="Sample" className="w-14 h-14 rounded-full mr-4" />
                  <span>Biruk Alemayehu</span>
                </div>
              </td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">Machine Learning</td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">4</td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">biruk@gmail.com</td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                <span className="p-2 text-sm font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                <Link to={`/advisor/student-details/003`} className="font-bold text-blue-500 hover:underline">003</Link>
              </td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                <div className="flex items-center">
                  <img src={ManImage} alt="Sample" className="w-14 h-14 rounded-full mr-4" />
                  <span>Chala Tadesse</span>
                </div>
              </td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">Data Science</td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">2</td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">chala@gmail.com</td>
              <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                <span className="p-2 text-sm font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
                  Overdue
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvisorStudents;
