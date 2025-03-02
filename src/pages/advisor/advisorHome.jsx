import React, { useEffect, useState } from 'react';
import { FaUser, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

const AdvisorHome = () => {
  const [advisor, setAdvisor] = useState(null);
  const [showProfilePrompt, setShowProfilePrompt] = useState(false);

  useEffect(() => {
    const fetchAdvisorData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/user/get', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const advisorData = response.data;
        console.log('Advisor data:', advisorData);
        setAdvisor(advisorData);

        if (!advisorData.email || !advisorData.phoneNo) {
          setShowProfilePrompt(true);
        }
      } catch (error) {
        console.error('Error fetching advisor data:', error);
      }
    };

    fetchAdvisorData();
  }, []);

  if (!advisor) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-pulse text-6xl font-bold text-blue-500">
          .....
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white w-full">
      {showProfilePrompt && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
          <p className="font-bold">Profile Incomplete</p>
          <p>Please update your profile with your email and phone number.</p>
        </div>
      )}
      <div className='flex gap-40'>
        <div>
          <div className='flex gap-80'>
            <div className='flex items-center space-x-10 space-y-10 gap-20 ml-20'>
              <div className="grid">
                <img src={advisor.profilePicture || 'src/assets/images/placeholder.jpg'} className="h-20 w-20 rounded-full" alt="Profile" />
                <p className='text-blue-500 font-semibold text-lg'>{advisor.firstName} {advisor.lastName}</p>
              </div>
              <div className='space-y-6 text-sm'>
                <p>
                  <span className="text-blue-600 font-semibold">Department :</span> {" "}{advisor.department || 'School of Information Technology'}
                </p>
                <p>
                  <span className="text-blue-600 font-semibold">Email :</span> {" "}{advisor.email || 'Not provided'}
                </p>
                <p>
                  <span className="text-blue-600 font-semibold">Specialization :</span> {" "}{advisor.specialization || 'Artificial Intelligence'}
                </p>
                <p>
                  <span className="text-blue-600 font-semibold">Current Students :</span> {" "}{advisor.currentStudents || 'Not provided'}
                </p>
                <p>
                  <span className="text-blue-600 font-semibold">Phone No :</span> {" "}{advisor.phoneNo || 'Not provided'}
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-blue-600 font-semibold text-lg p-10">University News</h1>
          <div className='flex items-center gap-10'>
            <FaArrowLeft className='text-blue-500' size={30} />
            <div className='flex items-center border-gray-400 rounded-lg p-4 shadow-md w-60'>
              <div className='grid items-center'>
                <img src='src/assets/images/aau.jpg' className='h-20 w-40 mb-6 ml-5 items-center' alt="News" />
                <p>Graduating students, please complete all approvals and submit your thesis to ensure timely graduation.</p>
                <p className='text-blue-600 ml-5'>Dr. Kebede Abebe</p>
                <p className='ml-4 mt-4'>Software department</p>
              </div>
            </div>
            <div className='flex items-center border-gray-400 rounded-lg p-4 shadow-md w-60'>
              <div className='grid items-center'>
                <img src='src/assets/images/aau.jpg' className='h-20 w-40 mb-6 ml-5 items-center' alt="News" />
                <p>Graduating students, please complete all approvals and submit your thesis to ensure timely graduation.</p>
                <p className='text-blue-600 ml-5'>Dr. Kebede Abebe</p>
                <p className='ml-4 mt-4'>Software department</p>
              </div>
            </div>
            <div className='flex items-center border-gray-400 rounded-lg p-4 shadow-md w-60'>
              <div className='grid items-center'>
                <img src='src/assets/images/aau.jpg' className='h-20 w-40 mb-6 ml-5 items-center' alt="News" />
                <p>Graduating students, please complete all approvals and submit your thesis to ensure timely graduation.</p>
                <p className='text-blue-600 ml-5'>Dr. Kebede Abebe</p>
                <p className='ml-4 mt-4'>Software department</p>
              </div>
            </div>
            <FaArrowRight className='text-blue-500' size={30} />
          </div>
          <div className="flex justify-end mt-0 "></div>
        </div>
        <div className="w-80 border rounded-lg shadow-md p-4">
          <h2 className="text-blue-600 font-semibold text-lg mb-4">
            October 2024
          </h2>
          <Calendar />
          <div className="mt-4">
            <p className="text-gray-500 text-xs">8:30 AM</p>
            <p>Meeting with the Supervisor</p>
            <p className="text-gray-500 text-xs mt-2">10:00 AM</p>
            <p>First Draft Submission</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdvisorHome;