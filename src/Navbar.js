import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link to="/" className="navbar__link">
                        about
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link to="/projects" className="navbar__link">
                        projects
                    </Link>
                </li>
              </ul>
            </nav>
    )
}

export default Navbar;