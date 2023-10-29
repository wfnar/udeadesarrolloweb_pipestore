let listaProductos = [
    {
        name : 'Camisa Hombre',
        price : 100000,
        description : 'Camisa manga larga para hombre',
        imagen: 'img/camisa.jpg',
        cantidad: 100
    },
    {
        name : 'Blusa',
        price : 90000,
        description : 'Blusa en diferentes colores',
        imagen: 'img/blusa.jpg',
        cantidad: 100
    },
    {
        name : 'Jean Hombre',
        price : 150000,
        description : 'Jean Hombre en diferentes tallas',
        imagen: 'img/jeanhombre.jpg',
        cantidad: 100
    },
    {
        name : 'Jean Mujer',
        price : 170000,
        description : 'Jean Mujer en diferentes tallas',
        imagen: 'img/jeanmujer.jpg',
        cantidad: 100
    }
];



function hiceClick(id){
    console.log('hice click', id);
    listaProductos[id].cantidad -=1;
    console.log(listaProductos[id].cantidad);
    carrito.agregarItems(id);
    mostrarProductos()
}

function eliminarClick(id){
    console.log('hice click', id);
    listaProductos[id].cantidad +=1;
    mostrarProductos();
    carrito.eliminarItems(id);
}


function mostrarProductos(){
let productoHtml = '';

    for(let i=0; i<listaProductos.length; i++){
        let producto = `
        <div class="card d-flex" style="width: 18rem;">
        <img src="${listaProductos[i].imagen}" class="card-img-top d-flex justify-content-center" alt="...">
        <div class="card-body">
          <h5 class="card-title">${listaProductos[i].name}</h5>
          <p class="card-text">${listaProductos[i].description}</p>
          <p class="card-text">$ ${listaProductos[i].price}</p>
          <p class="card-text">Dispobiles:  ${listaProductos[i].cantidad}</p>
          <a href="#" class="btn btn-primary" onclick="hiceClick(${i});">Agregar</a>
        </div>
        </div>`;
        productoHtml+= producto
    };

    document.getElementById('catalogo-productos').innerHTML = productoHtml;

}


mostrarProductos();

let carrito = new Carrito(listaProductos);