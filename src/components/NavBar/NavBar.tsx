import { useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="pages">
      <button onClick={() => handleRedirect('/tech')}>tech</button>
      <button onClick={() => handleRedirect('/notes')}>notes</button>
    </div>
  );
}

export default NavBar;