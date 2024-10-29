import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToStudents = () => {
    navigate('/students');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button 
        onClick={goToStudents} 
        data-testid="student-btn"
      >
        All Students
      </button>
    </div>
  );
};

export default Home;
