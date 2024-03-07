
import Footer from './Components/Footer';
import HeroPage from './Components/HeroPage';
import HeroSection2 from './Components/HeroSection2'
import HeroSection3 from './Components/HeroSection3'
import HeroSection4 from './Components/HeroSection4'
import QRCode from './Components/QRCode'
import Home from './Components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import EmergencyPolicy from './Components/EmergencyPolicy';
import CancellationPolicy from './Components/CancellationPolicy';


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/emergencies' element={<EmergencyPolicy/>}/>
          <Route path='/cancellationPolicy' element={<CancellationPolicy/>}/>
        </Routes>


      <Footer/>
      </Router>
   

    </div>
  );
}

export default App;
