import { NavLink } from "react-router-dom"

const Headers = () => {
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <h1 >WorldAtlas</h1>
            </NavLink>
          </div>

          <nav>
            <ul>
              <li ><NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink></li>
              <li ><NavLink to="/about" style={{ textDecoration: 'none' }}>About</NavLink></li>
              <li ><NavLink to="/country" style={{ textDecoration: 'none' }}>Country</NavLink></li>
              <li><NavLink to="/contact" style={{ textDecoration: 'none' }}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
  
}

export default Headers