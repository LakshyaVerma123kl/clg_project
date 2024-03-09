import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Homefolder/home.jsx";
import About from "./AboutFolder/about.jsx";
import Courses from "./CoursesFolder/courses.jsx";
import Schedules from "./SchedulesFolder/schedules.jsx";
import Assesment from "./Assignemnt_testFolder/assesment.jsx";
import Studentlogin from "./LoginPageFolder/studentlogin.jsx";
import Teacherlogin from "./LoginPageFolder/teacherlogin.jsx";
import TeacherRegister from "./RegisterPageFolder/teacherRegister.jsx";
import StudentRegister from "./RegisterPageFolder/studentRegister.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="courses" element={<Courses />}></Route>
      <Route path="schedules" element={<Schedules />}></Route>
      <Route path="ass_test" element={<Assesment />}></Route>
      <Route path="teacher/login" element={<Teacherlogin />}></Route>
      <Route path="student/login" element={<Studentlogin />}></Route>
      <Route path="teacher/register" element={<TeacherRegister />}></Route>
      <Route path="student/register" element={<StudentRegister />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
