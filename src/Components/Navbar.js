import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li class="nav-item"><a href="#home">Home</a></li>
        <li class="nav-item"><a href="#about">About</a></li>
        <li class="nav-item"><a href="#project">Project</a></li>
        <li class="nav-item"><a href="#home">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;