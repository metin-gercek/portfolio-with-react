import "./App.css";

import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Cards from './components/Carousel';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />

      <Projects />
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
