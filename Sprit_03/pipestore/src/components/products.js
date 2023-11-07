import { useEffect, useState } from "react";

function ProductElement(props) {
  function addToCart() {
    props.add((arrayOld) => [
      ...arrayOld,
      { name: props.name, description: props.description, price: props.price, imagen: props.imagen},
    ]);
  }
  return (
    <div class="card d-flex col-5 m-2">
      <img
        src={props.imagen}
        class="card-img-top d-flex justify-content-center"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.description}</p>
        <p class="card-text">$ {props.price}</p>
        <p class="card-text">Dispobiles: {props.cantidad}</p>
        <button class="btn btn-primary" onClick={addToCart}>
          Agregar
        </button>
      </div>
    </div>
  );
}

// function ProductList(props) {
//     let listaProductos = [
//         {
//             name : 'Camisa Hombre',
//             price : 100000,
//             description : 'Camisa manga larga para hombre',
//             imagen: 'img/camisa.jpg',
//             cantidad: 100
//         },
//         {
//             name : 'Blusa',
//             price : 90000,
//             description : 'Blusa en diferentes colores',
//             imagen: 'img/blusa.jpg',
//             cantidad: 100
//         },
//         {
//             name : 'Jean Hombre',
//             price : 150000,
//             description : 'Jean Hombre en diferentes tallas',
//             imagen: 'img/jeanhombre.jpg',
//             cantidad: 100
//         },
//         {
//             name : 'Jean Mujer',
//             price : 170000,
//             description : 'Jean Mujer en diferentes tallas',
//             imagen: 'img/jeanmujer.jpg',
//             cantidad: 100
//         }
//     ];

//     return(

//         <div className="col-9 d-flex flex-wrap justify-content-around">
//             <h3 className="col-12 d-flex justify-content-center" >Catalogo</h3>
//             {
//                 listaProductos.map((product => {
//                     return <ProductElement
//                     imagen={product.imagen}
//                     name={product.name}
//                     description={product.description}
//                     price={product.price}
//                     cantidad={product.cantidad}
//                     add={props.setSelectItem}
//                     ></ProductElement>

//                 }))
//             }
//         </div>

//     );
// }

function ProductList(props) {
  const [products, setProducts] = useState([]);

  let pokemons = ["charmander", "pikachu", "ditto", "squirtle", "metapod"];

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    pokemons.map((pokemon) => {
      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon, {
        headers: {
          accept: "application/json",
        },
        method: "GET",
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProducts((arrayOld) => [
            ...arrayOld,
            {
              name: data.name,
              price: data.weight * 100,
              description: `Tiene ${data.moves.length} movimientos`,
              imagen: data.sprites.front_default,
            },
          ]);
        })
        .catch((e) => console.log(e));
    });
  },[]);

  return (
    <div className="col-9 d-flex flex-wrap justify-content-around">
      <h3 className="col-12 d-flex justify-content-center">Catalogo</h3>
      {products.map((product) => {
        return (
          <ProductElement
            imagen={product.imagen}
            name={product.name}
            description={product.description}
            price={product.price}
            cantidad={product.cantidad}
            add={props.setSelectItem}
          ></ProductElement>
        );
      })}
    </div>
  );
}

export default ProductList;
