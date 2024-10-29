import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/student");
  };

  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the Home page</p>
      <button data-testid='student-btn' onClick={handleButton}>
        All Student
      </button>
    </>
  );
};

export default Home;
