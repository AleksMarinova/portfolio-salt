import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <NavLink to="/" className={(navData)=> navData.isActive ? 'active' : ''}>
                        about
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/projects" className="navbar__link">
                        projects
                    </NavLink>
                </li>
              </ul>
            </nav>
    )
}

export default Navbar;