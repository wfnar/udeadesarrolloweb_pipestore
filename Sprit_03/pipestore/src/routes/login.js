import NavBar from "../components/navBar";


function Login(){
    function enviarDatos(event) {
    event.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        username: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }),
    });

    // fetch("http://localhost:3001/api", {
    //     method: "GET",
    //     headers: {
    //     "Content-type": "Application/json",
    //   },
    // }).then(res => res.json())
    // .then(res => console.log(res))

  }
  return (
    <>
      <NavBar></NavBar>
      {/* <div className="container">
        <form className="col-4 d-flex flex-column justify-content-around" onSubmit={enviarDatos}>
          <label>username:</label>
          <input id="username"></input>
          <label>password:</label>
          <input type="password" id="password"></input>
          <input type="submit" value="Iniciar sesion"></input>
        </form>
      </div> */}

      <section class="vh-100">

<div class="container py-8 h-100">
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col col-xl-5">
      <div class="card align-items-center" >
        <div class="row g-0" >
          
          <div class="col-md-6 col-lg-7 col-sm-12 d-flex align-items-center" >
            <div class="card-body p-4 p-lg-5 text-black ">

              <form onSubmit={enviarDatos}>

                <div class="d-flex align-items-center mb-3 pb-1">
                  <span class="h3 fw-bold mb-0" >Pipe'Store</span>
                </div>

                <h5 class="fw-normal mb-3 pb-3" >Sign into your account</h5>

                <div class="form-outline mb-5">
                  <input type="email" id="email" class="form-control form-control-lg" required/>
                  <label class="form-label" for="email">Correo Electronico</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="password" class="form-control form-control-lg" required minlength="8"/>
                  <label class="form-label" for="form2Example27">Contraseña</label>
                </div>

                <div class="pt-1 mb-4">
                  <button class="btn btn-primary btn-lg btn-block" type="submit" >Login</button>
                </div>
  
                <a class="small text-muted" href="#!">Olvido su contraseña?</a>
                
                <a href="#!" class="small text-muted">Terminos de uso.</a>
                <br/>
                <a href="#!" class="small text-muted">Politias de privacidad </a>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

    </>
  );
}

export default Login;