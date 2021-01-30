import './App.css';
import {Router} from "@reach/router";
import Nav from './Components/Nav';
import About from './Components/About';
import Shop from './Components/Shop';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Shop path="/shop" />
        <Gallery path="/gallery" />
        <Contact path ="/contact" />
      </Router>
    </div>
  );
}

export default App;
