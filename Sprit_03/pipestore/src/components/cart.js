import "./cart.css";
//import { useState } from "react";

function Producto(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{props.name}</div>
        {props.description}
      </div>
      <span class="badge bg-primary rounded-pill">$ {props.price}</span>
    </li>
  );
}

function Cart(props) {
  let total = 0;

  function pay() {
    let venta = {
      products: props.selectedItems,
      total: total,
    };

    fetch("/pay", {
      headers: {
        "Content-type": "Application/json",
      },
      method: "POST",
      body: JSON.stringify(venta),
    });
  }

  return (
    <div className="col-3 mh-100" id="cart">
      <h2 className="d-flex justify-content-center">Carrito Compras</h2>
      <ol className="list-group list-group-numbered" id="list">
        {props.selectedItems.map((item) => {
          total += item.price;
          return (
            <Producto
              name={item.name}
              description={item.description}
              price={item.price}
            ></Producto>
          );
        })}
      </ol>
      <div className="d-flex justify-content-evenly col-12 mt-4">
      <button type="button" class="btn btn-outline-dark">
          Total: $ {total}
        </button>
        <button type="button" class="btn btn-success" onClick={pay}>
          Pagar carrito
        </button>
      </div>
    </div>
  );
}

export default Cart;
