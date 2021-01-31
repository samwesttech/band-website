import './App.css';
import {Router} from "@reach/router";
import Nav from './Components/Nav';
import Videos from './Components/Videos';
import Music from './Components/Music';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Social from "./Components/Social";
import PrivacyPolicy from "./Components/PrivacyPolicy";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Social />
      <Router>
        <Home path="/" />
        <Music path="/music" />
        <Videos path="/videos" />
        <Gallery path="/gallery" />
        <Contact path="/contact" />
        <PrivacyPolicy path="/privacy_policy"/>
      </Router>
    </div>
  );
}

export default App;
