//test de javaScript
/*
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
*/
/*
alert("hola, vamos a comprobar si el numero que ingresas es par o impar.");
var numero = prompt("Ingresa un numero:");
var resultado = numero % 2;

if (resultado == 0) {
    var mensajePar= "El numero " + numero + " es par!";
    alert(mensajePar);
} else {
    var mensajeImpar ="El numero " + numero + " es impar";
    alert(mensajeImpar);
}
*/
alert("El siguiente array solamente tiene un numero");
var numeros = [0];
var mensaje0 = "numeros en el array: " + numeros;
alert(mensaje0);

var tamaño = numeros.length;//comprobando el tamaño del array numeros
//alert(tamaño);
tamaño--;//el tamaño devuelto normalemente es mañor al index del array entonces para mostrar el ultimo numero de forma automatica, necesito restarle -1 al tamaño devuelto.
var ultimonumero = numeros[tamaño];//muestro de forma automatica el ultimo numero contenido del array.
alert("Ahora vamos a añadir con un bucle while, numeros al array!");

while (ultimonumero++ <= 99){ //en esta condicion estoy diciendo que si el valor del ultimo numero sumado +1 es menor a 99, quiero que me añada uno mas.
    numeros.push(ultimonumero);
}

var mensajeTest= "Numeros en el array: " + numeros; //compruevo todos los numeros conteniddos del array despues del bucle.
alert(mensajeTest);

var numerosPares=[];//inicializamos un nuevo array que va a contener los numero pares del anterior
while (numeros[0] <= 50){ //en la condicion aclaramos que mientras el index sea menor o igual a 50 valla aumentando
    var par = numeros[0]%2;//variable que contiene el resto 0
    if (par == 0) {//condicion que comprueba que el resto sea 0
        var guardarNumero = numeros[0];//si el resto es 0 entonces se almacena el numero en esta variable
        numerosPares.push(guardarNumero);//con la variable anterior guardamos los numeros en el nuevo array
    }
    numeros[0]++;
}
alert("Los siguientes numeros son los primeros 25 pares del array: ");
alert(numerosPares);