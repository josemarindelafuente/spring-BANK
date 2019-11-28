console.log ("Mensaje enviado desde admin.js");


//verifico si la sesion de usuario esta activa
if (sessionStorage.getItem('usuarioActivo') === null) {
  window.location.href = "index.html";
}









/*///////////////////////////////////////////////*/
/*   populacion de tabla de clientes en ADMIN    */
/*///////////////////////////////////////////////*/ 
let todosLosCliente = JSON.parse(localStorage.getItem("DB"));

var tableData = todosLosCliente.map( cliente => (
  `
    <tr>
      <td>${cliente.nombre}</td>
      <td>${cliente.apellido}</td>
      <td>${cliente.usuario}</td>
    </tr>
  `
)).join('');
var tbody = document.querySelector('#body');
tbody.innerHTML = tableData;


/*///////////////////////////////////////////////*/
/* evento de creacion de clientes de forma manual*/
/*///////////////////////////////////////////////*/ 
var boton_admin_crea_usuario = document.getElementById('boton_admin_crea_usuario');
boton_admin_crea_usuario.addEventListener("click", function (event) { 

    event.preventDefault();

    let var_login_user = document.querySelector("#var_login_user").value;
    let var_login_password = document.querySelector("#var_login_password").value;
    let var_login_nombre = document.querySelector("#var_login_nombre").value;
    let var_login_apellido = document.querySelector("#var_login_apellido").value;

    let clients = JSON.parse(localStorage.getItem("DB"));

    //console.log (clients);

    clients.push({
        usuario: var_login_user,
        password: var_login_password,
        nombre: var_login_nombre,
        apellido: var_login_apellido,
        activo: false,
        tipousuario: 0
      });

      localStorage.setItem("DB", JSON.stringify(clients));

      console.log ("Se dio de alta el usuario");
});



