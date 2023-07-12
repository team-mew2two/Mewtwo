import Techs from './pages/Techs/Techs';
import Notes from './pages/Notes/Notes';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import LoginBar from './components/Login/LogIn';
// import Title from './components/Title/Title'


function App() {

  return (
    <>
      {/* <Title /> */}
      <LoginBar />
      <NavBar />
      <Routes>
        <Route path="/tech" element={<Techs />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
