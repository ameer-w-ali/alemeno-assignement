import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { setCourses } from "./store/reducers/courseReducer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { setUser } from "./store/reducers/userReducer";

const API_URL = "http://localhost:3000";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${API_URL}/courses`);
        dispatch(setCourses(response.data));
      } catch (error) {
        console.error("Failed to fetch courses", error);
      }
    };
    fetchCourses();
    const fetchUser = async () => {
      try {
        const response = await axios(`${API_URL}/users/1`);
        dispatch(setUser(response.data));
      } catch (error) {
        console.error("failed to fetch user", error);
      }
    };
    fetchUser();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
