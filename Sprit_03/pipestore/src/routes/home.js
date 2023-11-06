import NavBar from "../components/navBar";
import Cart from "../components/cart";
import ProductList from "../components/products";


function Home(){
    return <>
        <NavBar canSearch={true}></NavBar>
        <div className="container d-flex">
            <ProductList></ProductList>
            <Cart></Cart>
        </div>
    </>
}

export default Home;