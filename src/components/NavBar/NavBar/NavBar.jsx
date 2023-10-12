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
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Todas</a></li>
              <li><a className="dropdown-item" href="#">Gorras</a></li>
              <li><a className="dropdown-item" href="#">Remeras</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <CartWidget/>
  </nav>
        
  
  )
}

export default NavBar