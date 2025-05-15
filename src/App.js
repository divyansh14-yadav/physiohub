import logo from "./logo.svg";
import "./App.css";
import "../src/output.css";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import NewPassword from "./pages/password/NewPassword";
import VerifyEmail from "./pages/VerifyEmail";
import OtpVerification from "./pages/otp/Otp";
import Dashboard from "./components/Dashboard";
import ActivityTracker from "./components/dashbords/ActivityTraker";
import ProfileEdit from "./components/dashbords/profile/ProfileEdit";
import Discover from "./components/dashbords/discover/discover";
import Blogs from "./components/Blogs";
import BlogPage from "./components/dashbords/blogs/blogs";
import TeacherBlogs from "./components/dashbords/blogs/teacherAllBlogs";
import CreateBlog from "./components/dashbords/blogs/CreateBlogs";
import CreateCourse from "./components/dashbords/Course/course";
import UserallCourse from "./components/dashbords/Course/userCourse";
import TeacherallCourse from "./components/dashbords/Course/teacherallCourse";
import CreateFlashcard from "./components/dashbords/flashcard/createFlashcard";
import TeacherFlashCard from "./components/dashbords/flashcard/teacherFlashCard";
import UserFlashcard from "./components/dashbords/flashcard/userFlashcard";
import Userquiz from "./components/dashbords/quiz/userquiz";
import TeacherQuiz from "./components/dashbords/quiz/teacherQuiz";
import TeacherLesson from "./components/dashbords/lesson/teacherLesson";
import CreateLesson from "./components/dashbords/lesson/createLesson";
import FlashcardDetails from "./components/dashbords/flashcard/detailed/flashcardDetails";

function App() {
  const location = useLocation();
  return (
    <div>
      <Nav  key={location.pathname}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/newPassword' element={<NewPassword />}></Route>
        <Route path='/verifyEmail' element={<VerifyEmail />}></Route>
        <Route path='/OtpVerification' element={<OtpVerification />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/profile' element={<ProfileEdit />}></Route>
        <Route path='/discover' element={<Discover />}></Route>
        <Route path='/blogs' element={<BlogPage />}></Route>
        <Route path='/flashCardDetails/:subject' element={<FlashcardDetails />}></Route>

        <Route path='/TeacherBlogs' element={<TeacherBlogs />}></Route>
        <Route path='/CreateBlogs' element={<CreateBlog />}></Route>
        <Route path='/createCourse' element={<CreateCourse />}></Route>
        <Route path='/teacherCourse' element={<TeacherallCourse/>}></Route>
        <Route path='/userCourse' element={< UserallCourse/>}></Route>
        <Route path='/createFlashCard' element={< CreateFlashcard/>}></Route>
        <Route path='/teacherFlashCard' element={< TeacherFlashCard/>}></Route>
        <Route path='/userFlashCard' element={< UserFlashcard/>}></Route>
        <Route path='/userQuiz' element={< Userquiz/>}></Route>
        <Route path='/teacherQuiz' element={< TeacherQuiz/>}></Route>

        <Route path='/teacherLesson' element={< TeacherLesson/>}></Route>
        <Route path='/CreateLesson' element={< CreateLesson/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
