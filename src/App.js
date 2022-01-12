import Header from './Header';
import About from './About';
import ProjectsContainer from './ProjectsContainer';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<ProjectsContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
