import { Link } from "react-router-dom";

export default function CourseCard({
  course,
  type = "normal",
  onMarkComplete,
}) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <img
        src={course.thumbnail}
        alt={course.name}
        className="mt-2 rounded-lg w-full h-48 object-cover"
      />
      <div className="mt-4">
        <Link
          to={`/course/${course.id}`}
          className="block text-xl font-semibold text-blue-600 hover:underline"
        >
          {course.name}
        </Link>
        <p className="text-gray-700">Instructor: {course.instructor}</p>
        {type === "normal" && (
          <p className="text-gray-500 mt-2">
            {course.description.substring(0, 100)}...
          </p>
        )}
        {type === "dashboard" && (
          <>
            <p className="text-gray-700 mt-2">Due Date: {course.due}</p>
            <div className="mt-2 flex items-center">
              <div className="w-48 bg-gray-200 rounded-full">
                <div
                  className="bg-blue-500 text-xs leading-none text-center text-white rounded-full py-1"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="ml-2 text-gray-700">{course.progress}%</p>
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id={`complete-${course.id}`}
                checked={!!course.completed} 
                onChange={(e) => onMarkComplete(course.id, e.target.checked)}
                className="mr-2"
              />
              <label
                htmlFor={`complete-${course.id}`}
                className="text-gray-700"
              >
                Mark as Complete
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
