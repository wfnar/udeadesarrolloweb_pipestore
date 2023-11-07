import NavBar from "../components/navBar";
import Eshop from "../components/eShop";
import { Link } from "react-router-dom";


function Home(){
    return <>
        <NavBar canSearch={true} linkA={<Link to={"/login"}>Ir a Login</Link>}></NavBar>
        <Eshop></Eshop>
    </>
}

export default Home;