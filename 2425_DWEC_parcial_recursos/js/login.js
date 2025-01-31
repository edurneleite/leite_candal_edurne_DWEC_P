let usersJSONPath = '../users.json';

function cargarJSONEnLocalStorage() {
    fetch(usersJSONPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar el archivo JSON desde ${usersJSONPath}`);
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            localStorage.setItem("usuarios", JSON.stringify(data)); // Guardar en Local Storage
            console.log("Usuarios cargados y almacenados en Local Storage:", data);
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}

// Función que valida el usuario y la contraseña
function validarCredenciales() {
    const usuariosJson = localStorage.getItem("usuarios");
    const usuariosArray = JSON.parse(usuariosJson);

    let usuarioI = document.getElementById('username').value;
    let passwordI = document.getElementById('password').value;

    for (i in usuariosArray['usuarios']){
        if (usuarioI == usuariosArray['usuarios'][i]['username']){
            if (passwordI == usuariosArray['usuarios'][i]['password']){
                console.log('ok');
                window.open('/html/juego.html');
            }
            console.log('Constraseña incorrecta');
            let mensajeError = document.getElementById('error-message');
            mensajeError.textContent = 'Constraseña incorrecta';

            break;

        }
        //console.log(usuariosArray['usuarios'][i]['username']);
        console.log('usuario y contraseña incorrectos');
        let mensajeError = document.getElementById("error-message");
        mensajeError.textContent = "Constraseña y usuarios incorrectos";
    }  
    

}




