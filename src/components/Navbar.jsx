import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <button onClick={() => handleNavigation('/')}>Home</button>
      <button onClick={() => handleNavigation('/students')}>Students</button>
      <button onClick={() => handleNavigation('/add-student')}>Add Student</button>
    </nav>
  );
};

export default Navbar;
