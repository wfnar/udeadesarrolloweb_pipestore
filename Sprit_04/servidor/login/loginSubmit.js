// function enviarInformacion() {
//     event.preventDefault();
//     let loginData = {
//       username: document.getElementById("username").value,
//       password: document.getElementById("password").value,
//     };

//     console.log(JSON.stringify(loginData));
//     fetch("http://localhost:3006/login", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//       body: JSON.stringify(loginData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         userToken = data.token;
//       });
//   }

//   function mostrarProductos() {
//     fetch("http://localhost:3000/productos", {
//       headers: {
//         "Content-Type": "application/json",
//         authorization: userToken,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }