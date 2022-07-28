import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
