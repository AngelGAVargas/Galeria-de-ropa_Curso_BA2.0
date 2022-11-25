//test de javaScript
alert("Hola, te regalamos una mochila :D, veamos cuantas cosas tiene."); //mensajes en formato popup
var mochila = [' Linterna',' Celular',' Reloj',' Cargador',' Cuaderno'];//array que tambien es un tipo de variable
var elementos = mochila.length; //metodo que muestra la cantidad de elementos que tiene el array
var mensaje1 = "hay " + elementos + " elementos en ella";
alert(mensaje1);

var numero = prompt("ingrese un numero entre el 0 y 4 para seleccionar alguno."); //prompt permite introducir datos

if (numero >= 0 && numero <5) { //if else, ya sabemos que hace xD
    alert(mochila[numero]); //aletar que muestra el elemento seleccionado
} else {
    alert("el numero seleccionado no es valido");
}
 alert("veamos todos los elementos que tenemos en la mochila!");
 var verelementos = "Tenemos los siguientes elementos: "+ mochila;//variable que almacena los elementos que tenemos
 alert(verelementos);//mostramos los elementos que tenemos

//guardamos el nuevo elemento en una variable
var nuevoelemento = prompt("Agrega un elementos mas en la mochila");

//este if comprueva que el elemento guardado en la variable anterior no se encuentre repetido en el array
if (mochila.includes(nuevoelemento) == false ){

    mochila.push(nuevoelemento); //metodo de array que permite agregar un elemento al final de la lista

    elementos = mochila.length;//volvemos a comprobar la cantidad de elementos
    mensaje1 = "Ahora tenemos " + elementos + " elementos";
    alert(mensaje1);

    numero = prompt("ahora selecciona una opcion entre 0 y el 5");

    if (numero >= 0 && numero < 6){
        alert(mochila[numero]);
        alert("Perfecto, ahora tenemos mas cosas :D! vamos a ver");
        verelementos = "Ahora tenemos los siguientes elementos: "+ mochila; //refrescamos los elementos que tenemos
        alert(verelementos);

    } else {      
        alert("el numero seleccionado no es valido");
    }

} else {
    alert("ya existe ese elemento, intenta con otro diferente!");
}
