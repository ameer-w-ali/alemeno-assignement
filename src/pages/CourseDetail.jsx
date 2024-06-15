import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Course from "../components/Course";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setSelected } from "../store/reducers/courseReducer";

const API_URL = "http://localhost:3000";

export default function CoursePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.selected);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`${API_URL}/courses/${id}`);
        dispatch(setSelected(response.data));
      } catch (error) {
        console.error("Failed to fetch course:", error);
      }
    };
    fetchCourse();
  }, [dispatch,id]);

  if (!course) {
    return <div className="container mx-auto p-6">Loading...</div>;
  }
  return (
    <div className="container mx-auto p-6">
      <Course course={course} />
    </div>
  );
}
