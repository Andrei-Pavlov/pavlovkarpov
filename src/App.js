import './App.css';
import About from './Components/About';
import Achievements from './Components/Achievements';
import Banner from './Components/Banner';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Services from './Components/Services';
import Team from './Components/Team';
import Testimonials from './Components/Testimonials';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Achievements/>
      <Team/>
      <Contact/>
      <Testimonials/>
    </div>
  );
}

export default App;
