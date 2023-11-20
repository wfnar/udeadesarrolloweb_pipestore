import NavBar from "../components/navBar";
import { Link } from "react-router-dom";

function Inicio(){
    return <> 
        
        <NavBar></NavBar>
        <section className="container my-4">
            <div className="py-8 h-100">
                <div className="row justify-content-center">
                    <div className="d-grid gap-5 col-5 text-center">
                        <img src="../components/img/general.jpg" className="img-fluid w-100" alt=""/>
                    </div>
        
                    <div className="d-grid gap-5 col-5 mx-auto">
                        <div className="d-grid gap-3 col col-sm-12 mx-auto">
                            <h1 className="inicio">Bienvenido a Pipe'Store!!</h1>
                        </div>
        
                        <div className="row-5">
                            <div className="d-grid gap-3 col mx-auto">
                                <Link className="d-grid gap-3 col mx-auto" to={"/registro"}>
                                    <button type="button" className="btn btn-primary">Registrate</button>
                                </Link>                           
                                <button type="button" className="btn btn-secondary ">Iniciar sesión</button>
                            </div>
                        </div>
                        
                    </div>
        
                </div>
        
            </div>
        </section>

    </>
}

export default Inicio;