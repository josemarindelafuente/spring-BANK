export class Login {

    constructor(){}

/////////////////////////////////////////////////////
//                LOGIN USUARIOS                   //
/////////////////////////////////////////////////////
static loginUsuario (username, password) {

    if ( username === "admin" && password === "1234") {

        sessionStorage.setItem("usuarioActivo", "admin"); 
        return true;        
        //window.location.href = "admin.html"; 

        } else {

                return false;

                }

}










    
}