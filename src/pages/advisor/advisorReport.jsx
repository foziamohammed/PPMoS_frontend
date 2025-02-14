import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Icons for Approve and Decline
// Assuming Navbar is a separate component

const AdvisorReport = () => {
  const documents = [
    {
      id: 1,
      fileName: 'Thesis Draft 1.pdf',
      studentName: 'Sara Kebede',
      studentId: 'Phd/5489/16',
    },
    {
      id: 2,
      fileName: 'Research Proposal.pdf',
      studentName: 'Abebe Kebede',
      studentId: 'Phd/1234/19',
    },
    {
      id: 3,
      fileName: 'Final Report.pdf',
      studentName: 'Marta Tesfaye',
      studentId: 'Phd/5678/20',
    },
  ];

  const handleApprove = (documentId) => {
    alert(`Document ${documentId} Approved`);
    // Implement your API or state logic here
  };

  const handleDecline = (documentId) => {
    alert(`Document ${documentId} Declined`);
    // Implement your API or state logic here
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-blue-600 mb-6">Document Review</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 px-4">File Name</th>
                <th className="py-2 px-4">Student Name</th>
                <th className="py-2 px-4">Student ID</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{doc.fileName}</td>
                  <td className="py-2 px-4">{doc.studentName}</td>
                  <td className="py-2 px-4">{doc.studentId}</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center"
                        onClick={() => handleApprove(doc.id)}
                      >
                        <FaCheckCircle className="mr-2" />
                        Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"
                        onClick={() => handleDecline(doc.id)}
                      >
                        <FaTimesCircle className="mr-2" />
                        Decline
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdvisorReport;
