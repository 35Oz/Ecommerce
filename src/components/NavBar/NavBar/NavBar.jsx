import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../../CartWidget/CartWidget.jsx"
import './NavBar.css'

const category =[
  {id: '1', name:'Celulares', category: 'celulares'},
  {id: '2', name:'Auriculares', category: 'auriculares'}
]

function NavBar() {
  return (
    <nav className="nav navbar navbar-expand-lg " >
      <div className="container-fluid">
        <a className="navbar-brand" >
          <img src="/assets/logo.png" width="50" height="50" class="d-inline-block align-top" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse mx-auto" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="buttonInicio btn" type="button" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
              </a>
              <ul className="containerMenu dropdown-menu">
                  <Link  to='/'>
                    <li>
                      <a className="dropdown-item" href="#">
                        <button type="button" class="btn btn-outline-dark">
                          Todas
                        </button>
                      </a>
                    </li>
                  </Link>
                  {category.map(category=> 
                  <Link key={category.id} to={`/category/${category.category}`}>
                      <li>
                          <a className="dropdown-item" >
                            <button type="button" class="btn btn-outline-dark">
                              {category.name}
                            </button>
                          </a>
                      </li>
                  </Link>)}
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