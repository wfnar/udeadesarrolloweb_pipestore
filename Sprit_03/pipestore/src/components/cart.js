function Producto(props) {
    return (
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{props.name}</div>
          {props.description}
        </div>
        <span class="badge bg-primary rounded-pill">{props.price}</span>
      </li>
    );
  }

function Cart(){
    return (        
        <div className="col-3">
            <h2 className="d-flex justify-content-center">Carrito Compras</h2>
            <ol className="list-group list-group-numbered">
                <Producto name="Manzana" description="Fruta" price="10.00"></Producto>
            </ol>
        </div>
        
    )
}

export default Cart