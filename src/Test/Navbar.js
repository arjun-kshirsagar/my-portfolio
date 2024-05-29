import "./Navbar.css";

function Navbar() {
    return(
        <nav>
          <ul className="navbar">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="#resume">Resume</a></li>
          </ul>
        </nav>
    )
}

 export default Navbar;