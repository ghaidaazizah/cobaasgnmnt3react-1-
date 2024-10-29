import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const fetchStudent = async () => {
    const response = await fetch("http://localhost:3001/student");
    const data = await response.json();
    setStudents(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/student/${id}`, { method: "DELETE" });
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const filteredStudents = filter === "All" ? students : students.filter((s) => s.faculty === filter);

  return (
    <>
      <Navbar />
      <div>
        <select data-testid='filter' onChange={(e) => setFilter(e.target.value)}>
          <option value='All'>All</option>
          <option value='Fakultas Ekonomi'>Fakultas Ekonomi</option>
          <option value='Fakultas Ilmu Sosial dan Politik'>Fakultas Ilmu Sosial dan Politik</option>
          <option value='Fakultas Teknik'>Fakultas Teknik</option>
          <option value='Fakultas Teknologi Informasi dan Sains'>Fakultas Teknologi Informasi dan Sains</option>
        </select>
      </div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <table id='table-student'>
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Faculty</th>
              <th>Program Study</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student.id} className='student-data-row'>
                <td>{index + 1}</td>
                <td onClick={() => navigate(`/student/${student.id}`)}>{student.fullname}</td>
                <td>{student.faculty}</td>
                <td>{student.programStudy}</td>
                <td>
                  <button data-testid={`delete-${student.id}`} onClick={() => handleDelete(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Student;
