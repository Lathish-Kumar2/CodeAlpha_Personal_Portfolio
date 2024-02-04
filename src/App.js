import './App.css';
import Footer from './Components/Footer';
import HomeSection from './Components/HomeSection';
import Navbar from './Components/NavBar';
import ProjectsSection from './Components/ProjectSection';
import ResumeSection from './Components/ResumeSection';
import SkillsSection from './Components/SkillSection';
import './Styles/CompleteStyle.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ResumeSection/>
      <Footer/>
    </div>
  );
}

export default App;
