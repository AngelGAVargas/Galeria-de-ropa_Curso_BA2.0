//test de javaScript
alert("Hola mundo");
let cosas = ['llaves','anteojos','linterna','reloj','celular'];
let consulta = cosas[prompt("ingrese un numero entre 0 y 4")];
if (cosas>=0 && cosas<5) {
    alert(consulta);
} else {
    alert("ingrese un numero valido");
    return;    
}

