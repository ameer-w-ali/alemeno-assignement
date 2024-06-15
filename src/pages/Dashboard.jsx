import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/CourseCard";
import SearchBox from "../components/SearchBox";
import { setCompleted } from "../store/reducers/userReducer";

export default function Dashboard() {
  const [enrolled, setEnrolled] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const user = useSelector((state) => state.user.user);
  const courses = useSelector((state) => state.course.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && courses.length > 0) {
      const data = user.courses
        .map(({ id, progress, due, completed }) => {
          const course = courses.find((c) => c.id === id);
          if (course) {
            return {
              ...course,
              progress,
              due,
              completed,
            };
          }
          return null;
        })
        .filter((course) => course !== null);
      setEnrolled(data);
    }
  }, [user, courses]);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered(enrolled);
    } else {
      setFiltered(
        enrolled.filter((course) =>
          course.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [enrolled, search]);

  const handleMarkComplete = (courseId, completed) => {
    dispatch(setCompleted({ id: courseId, completed }));
    setEnrolled((prevEnrolled) =>
      prevEnrolled.map((course) =>
        course.id === courseId ? { ...course, completed } : course
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        {user ? `${user.name}'s Dashboard` : "Loading..."}
      </h1>
      <SearchBox
        value={search}
        setValue={setSearch}
        placeholder={"Find enrolled Courses..."}
      />

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <Card
              key={course.id}
              course={course}
              type="dashboard"
              onMarkComplete={handleMarkComplete}
            />
          ))}
        </div>
      ) : (
        <p>No courses found</p>
      )}
    </div>
  );
}
