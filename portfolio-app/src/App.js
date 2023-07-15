import './App.css';
import { Route, Routes } from 'react-router-dom';
import Background from './components/Background';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Missing from './components/Missing';
import About from './components/About';

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Missing />} />
        </Route>
    </Routes>
    </Background>
  );
}

export default App;
