export default function Course({ course }) {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {course.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {course.instructor}
          </p>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {course.enrollmentStatus}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {course.description}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Duration</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {course.duration}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Schedule</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {course.schedule}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {course.location}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Prerequisites
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                <ul className="list-disc pl-5">
                  {course.prerequisites.map((prerequisite, index) => (
                    <li key={index}>{prerequisite}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Syllabus</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {course.syllabus.map((week, index) => (
                  <div key={index} className="mt-2">
                    <details>
                      <summary className="cursor-pointer outline-none">{`Week ${week.week}: ${week.topic}`}</summary>
                      <p className="mt-2 text-gray-700">{week.content}</p>
                    </details>
                  </div>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
