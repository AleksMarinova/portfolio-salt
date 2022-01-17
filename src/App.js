import Header from './components/Header';
import Hero from './components/Hero';
import HeroInfo from './components/HeroInfo';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HeroInfo />
      <About />
      <Skills />
      <Projects />
      <Contacts />
     </div>
  );
}

export default App;
