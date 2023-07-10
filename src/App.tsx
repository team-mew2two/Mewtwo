// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { SideNav } from './components/SideNav'
import { TopNav } from './components/TopNav'
import { Notes } from './pages/Notes'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Home } from './components/Home';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className="App-header">
          <TopNav />
        </div>
        <div className="ContentWrapper">
          <SideNav />
          <Notes />
          {/* <div>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div> */}
        </div>
      </div >
    </>
  )
}

export default App
