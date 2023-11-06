function ProductElement() {
    return (
        <div class="card d-flex col-5" >
            <img src="" class="card-img-top d-flex justify-content-center" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Nombre</h5>
                    <p class="card-text">Description</p>
                    <p class="card-text">$ Price</p>
                    <p class="card-text">Dispobiles:  Cantidad</p>
                    <a href="/" class="btn btn-primary" >Agregar</a>
                </div>
        </div>
    );
}

function ProductList() {
    return(
        
        <div className="col-9 d-flex flex-wrap justify-content-around">
            <h3 className="col-12 d-flex justify-content-center" >Catalogo</h3>
            <ProductElement></ProductElement>
            <ProductElement></ProductElement>
            <ProductElement></ProductElement>
            <ProductElement></ProductElement>
        </div>
        
    );
}

export default ProductList;

