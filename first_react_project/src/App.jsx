import { useEffect, useState } from "react";

function App() {

  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");

  // GET API
  useEffect(() => {

    fetch("http://localhost:3000/courses")
      .then(res => res.json())
      .then(data => setCourses(data));

  }, []);

  // POST API
  const addCourse = () => {

    fetch("http://localhost:3000/courses", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        title: title
      })

    })
      .then(res => res.json())
      .then(data => {

        setCourses([...courses, data]);

        setTitle("");

      });

  };

  return (

    <div>

      <h1>Course App</h1>

      <input
        type="text"
        placeholder="Enter course"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addCourse}>
        Add Course
      </button>

      {courses.map(course => (
        <h3 key={course.id}>
          {course.title}
        </h3>
      ))}

    </div>

  );
}

export default App;