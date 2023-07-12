import Techs from './pages/Techs/Techs';
import Notes from './pages/Notes/Notes';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Title } from './components/Title/Title';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Title />
      <NavBar />
      <Routes>
        <Route path="/tech" element={<Techs />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
