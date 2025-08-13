import { Link } from 'react-router-dom';
import '../App.css'; // Or wherever you want to manage your styles

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
    );
}

export default NavBar;
