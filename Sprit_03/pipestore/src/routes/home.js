import NavBar from "../components/navBar";
import Eshop from "../components/eShop";


function Home(){
    return <>
        <NavBar canSearch={true}></NavBar>
        <Eshop></Eshop>
    </>
}

export default Home;