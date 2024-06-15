import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBox from "../components/SearchBox";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const courses = useSelector((state) => state.course.courses);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered(courses);
    } else {
      setFiltered(
        courses.filter((course) =>
          course.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  },[courses,search]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <SearchBox
        placeholder={"Search courses..."}
        value={search}
        setValue={setSearch}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
