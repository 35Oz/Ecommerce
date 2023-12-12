import { NavLink } from "react-router-dom"
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
          <img src="/assets/logo.png" width="50" height="50" className="d-inline-block align-top"  />
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
                  <NavLink  to='/'>
                    <li>
                      <p className="dropdown-item" >
                        <button type="button" className="btn btn-outline-dark">
                          Todas
                        </button>
                      </p>
                    </li>
                  </NavLink>
                  {category.map(category=> 
                  <NavLink key={category.id} to={`/category/${category.category}`}>
                      <li>
                          <p className="dropdown-item" >
                            <button type="button" className="btn btn-outline-dark">
                              {category.name}
                            </button>
                          </p>
                      </li>
                  </NavLink>)}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <NavLink to='/cart'>
      <CartWidget/>
      </NavLink>
      
  </nav>
  )
}

export default NavBar