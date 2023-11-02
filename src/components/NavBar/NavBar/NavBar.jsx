import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../../CartWidget/cartWidget"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Ecomerce</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? 'btn btn-outline-primary' : 'btn'} to="/">Inicio</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul className="dropdown-menu">
                <Link to='/'>
                    <li><a className="dropdown-item" href="#">Todas</a></li>
                </Link>
                <Link to='/category/gorras'>
                    <li><a className="dropdown-item" href="#">Gorras</a></li>
                </Link>
                <Link to='/category/remeras'>
                    <li><a className="dropdown-item" href="#">Remeras</a></li>
                </Link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <Link to='/cart'>
     <CartWidget/>
    </Link>
      
    
    
  </nav>
        
  
  )
}

export default NavBar