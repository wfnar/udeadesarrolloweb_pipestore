class Carrito{
    constructor(productos){
        this.productos = productos;
        this.itemSeleccionado = [];
    }

    agregarItems(id){
        this.itemSeleccionado.push(this.productos[id]);
        this.mostrarItems();
    }
    
    eliminarItems(id){
        this.itemSeleccionado.splice(id, 1);
        this.mostrarItems();
    }
    
    mostrarItems(){
        let productoHtml = "";
        let total = 0;
        for(let i = 0; i < this.itemSeleccionado.length; i++){
            let productoSeleccionado = `
            <li class="list-group-item d-flex flex-row justify-content-evenly align-items-center">
            <img class="item-img" src="${this.itemSeleccionado[i].imagen}" alt="">
            <p>${this.itemSeleccionado[i].name}</p>
            <p><i>$ ${this.itemSeleccionado[i].price}</i></p>
            <button type="button" class="btn btn-danger" onclick="eliminarClick(${i});">Eliminar</button>
            </li>`;
            
            productoHtml += productoSeleccionado;
            
            total += this.itemSeleccionado[i].price;

        }
        document.getElementById('carrito-compras-lista').innerHTML = productoHtml;
    }
}