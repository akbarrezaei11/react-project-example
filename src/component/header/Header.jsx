import './header.css';
import NavLink from '../nav-link/NavLink';

function Header(){
    return(
        <header>
            <div className="navbar-container">
              <div className="container d-flex justify-content-between align-items-center">
                <h2 className="logo">Next1Code</h2>
                <nav className="navbar">
                  <ul className="d-flex">
                    <NavLink name='Home'></NavLink>
                    <NavLink name='About'></NavLink>
                    <NavLink name='Services'></NavLink>
                    <NavLink name='Blog'></NavLink>
                  </ul>
                </nav>
              </div>
            </div>
            <h1 className="hero-title">I am Akbar Rezaei</h1>
            <p className="hero-desc">Hello, world!</p>
    </header>
    )
}
export default Header