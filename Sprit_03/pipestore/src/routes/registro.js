import NavBar from "../components/navBar";


function Registro(){
    function enviarDatos(event) {
        event.preventDefault();
    
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify({

            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            confirmPassword: document.getElementById("confirm-password").value,
            direccion: document.getElementById("direccion").value,
          }),
        });
        }
    return <>
        <NavBar></NavBar>
        <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-7">
          <div className="card" >
            <div className="row g-0">
  
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
  
                  <form onSubmit={enviarDatos}>
  
                    <div className="d-flex align-items-center mb-3 pb-1">                      
                      <span className="h1 fw-bold mb-0">Pipe'Store</span>
                    </div>
  
                    <h5 className="fw-normal mb-3 pb-3" >Formulario de Registro</h5>
  
  
                    <div className="form-outline mb-4">
                      <input type="text" id="nombre" className="form-control form-control-lg" required/>
                      <label className="form-label" for="form2Example27" >nombre</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" id="apellido" className="form-control form-control-lg" required/>
                      <label className="form-label" for="form2Example37">apellido</label>
                    </div>
  
  
  
                    <div className="form-outline mb-4">
                      <input type="email" id="email" className="form-control form-control-lg" required/>
                      <label className="form-label" for="form2Example57">Email address</label>
                    </div>
  
                    <div className="form-outline mb-4">
                      <input type="password" id="password" className="form-control form-control-lg" required minlength="8"/>
                      <label className="form-label" for="form2Example67">Password</label>
                    </div>
  
                    <div className="form-outline mb-4">
                      <input type="password" id="confirm-password" className="form-control form-control-lg" required minlength="8"/>
                      <label className="form-label" for="form2Example67">Confirmation Password</label>
                    <div id="password-error"></div>
                    </div>
  
                    <div className="form-outline mb-4">
                      <input type="text" id="direccion" className="form-control form-control-lg"/>
                      <label className="form-label" for="form2Example77">Dirección</label>
                    </div>
  
  
                    <div className="pt-1 mb-4">
                      <button className="btn btn-primary btn-lg btn-block" type="submit">Registrar</button>
                    </div>
  
  
                  </form>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
}

export default Registro;