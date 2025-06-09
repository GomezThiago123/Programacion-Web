const usuarioValido = "Thiago";
const contrasenaValida = "1234";

window.onload = function () {
  const sesionActiva = localStorage.getItem("sesionIniciada");
  if (sesionActiva === "true") {
    mostrarVistaEmpleados();
  }
};

function verificarLogin() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const errorMsg = document.getElementById("error-msg");

  if (usuario === usuarioValido && contrasena === contrasenaValida) {
    localStorage.setItem("sesionIniciada", "true");
    mostrarVistaEmpleados();
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos.";
  }
}

function mostrarVistaEmpleados() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("empleados-container").style.display = "block";
  obtenerEmpleadosDesdeAPI();
}

function obtenerEmpleadosDesdeAPI() {
  const lista = document.getElementById("lista-empleados");
  lista.innerHTML = "<p>Cargando empleados...</p>";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      lista.innerHTML = "";
      data.forEach((emp) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <h3>${emp.name}</h3>
          <p><strong>Email:</strong> ${emp.email}</p>
          <p><strong>Empresa:</strong> ${emp.company.name}</p>
        `;
        lista.appendChild(card);
      });
    })
    .catch((error) => {
      lista.innerHTML = "<p>Error al cargar empleados.</p>";
      console.error(error);
    });
}

function cerrarSesion() {
  localStorage.removeItem("sesionIniciada");
  location.reload();
}
