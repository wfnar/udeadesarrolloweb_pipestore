import { Link } from "react-router-dom";


function NavBar(props){
  // const Cart = props.cart;
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item nav-link">
                {props.linkA}
              </li>
              <li className="nav-item nav-link">Carrito</li>
              <li className="nav-item nav-link">Historia de Compras</li>
              <li className="nav-item nav-link">Configuración</li>
            </ul>
          </div>
          { props.canSearch && (
          <div className="me-4">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        )}
          <div>
            <button className="btn btn-primary">Logout</button>
              <Link to={"/login"}>
            <button className="btn btn-primary">
              Login
            </button>

              </Link>
          </div>

          {/* <Cart /> */}
          {/* <props.cart /> */}
           {/* {props.cart} */}
         </div>
       </nav>


    );
}

export default NavBar;