import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Typewriter from "./Components/Typewriter";

function App() {
  return (
    <div className="App">
      <header className="navbar-container">
        <img src={logo} className="app-logo" alt="logo" />
        <Navbar />
      </header>
      <Typewriter 
        text={[
          "Hello My name is Arjun",
          "I am a Full Stack Developer",
          "I am a MERN Stack Developer",
        ]}
        typingSpeed={100}
        erasingSpeed={50}
        duration={2000}
      />
    </div>
  );
}

export default App;