import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/student/home";
import Issues from "./pages/student/issues";
import Meeting from "./pages/student/meeting";
import MilestoneProgress from "./pages/student/milestones";
import AdvisorHome from "./pages/advisor/advisorHome";
import AdvisorMeeting from "./pages/advisor/advisorMeeting";
import AdvisorStudents from "./pages/advisor/advisorStudents";
import CoordinatorNavbar from "./components/coordinatorNavbar";
import AdvisorNavbar from "./components/advisorNavbar";
import AdvisorReport from "./pages/advisor/advisorReport";
import CoordinatorReport from "./pages/coordinator/coordinator_report";
import DocumentTable from "./pages/student/report";
import AddMilestone from "./pages/advisor/milestone_form";
import CoordinatorStudents from "./pages/coordinator/coordinator_students";
import StudentDetails from "./pages/student/studentDetails";
import StudentDetail from "./pages/coordinator/student_detail";
import Footer from "./components/footer";
import DeanHome from "./pages/dean/dean_home";
import CoordinatorHome from "./pages/coordinator/coordinator_home";
import DeanStudents from "./pages/dean/dean_students";
import DeanReport from "./pages/dean/dean_report";
import DeanNavbar from "./components/deanNavbar";
import SignIn from "./pages/Sign_in/SignIn";
import SignInNavBar from "./components/SignInNavBar";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [role, setRole] = useState(user ? user.role : "");

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Render Navbar based on role */}
        {role === "" && <SignInNavBar />}
        {role === "student" && <Navbar />}
        {role === "advisor" && <AdvisorNavbar />}
        {role === "coordinator" && <CoordinatorNavbar />}
        {role === "dean" && <DeanNavbar />}

        <div className="flex-grow p-20">
          <Routes>
            {role === "" && (
              <>
                <Route path="/" element={<SignIn setRoles={setRole} />} />
              </>
            )}

            {/* Routes for student */}
            {role === "student" && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/issues" element={<Issues />} />
                <Route path="/meeting" element={<Meeting />} />
                <Route path="/milestones" element={<MilestoneProgress />} />
                <Route path="/report" element={<DocumentTable />} />
              </>
            )}

            {/* Routes for advisor */}
            {role === "advisor" && (
              <>
                <Route path="/" element={<AdvisorHome />} />
                <Route path="/advisor/meeting" element={<AdvisorMeeting />} />
                <Route path="/advisor/students" element={<AdvisorStudents />} />
                <Route
                  path="/advisor/student-details/:studentId"
                  element={<StudentDetails />}
                />
                <Route path="/advisor/document" element={<AdvisorReport />} />
                <Route path="/milestone_form/:ids" element={<AddMilestone />} />
              </>
            )}
            {role === "coordinator" && (
              <>
                <Route path="/" element={<CoordinatorHome />} />

                <Route
                  path="/coordinator/students"
                  element={<CoordinatorStudents />}
                />
                <Route
                  path="/coordinator/student_detail/:studentId"
                  element={<StudentDetail />}
                />
                <Route
                  path="/coordinator/document"
                  element={<CoordinatorReport />}
                />
              </>
            )}
            {role === "dean" && (
              <>
                <Route path="/" element={<DeanHome />} />

                <Route path="/dean/students" element={<DeanStudents />} />
                <Route
                  path="/coordinator/student_detail/:studentId"
                  element={<StudentDetail />}
                />
                <Route path="/dean/document" element={<DeanReport />} />
              </>
            )}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
