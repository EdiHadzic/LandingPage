
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroSection/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
