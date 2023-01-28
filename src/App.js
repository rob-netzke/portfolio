import Contact from './Components/Contact';
import Main from './Components/Main';
import Projects from './Components/Projects';
import Sidenav from './Components/Sidenav';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
      <Sidenav/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
