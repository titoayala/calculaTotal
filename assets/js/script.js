precio = 400000;
console.log(precio); /*muestra en consola el valor de la variable precio*/

function calcular() {
    console.log("calculando..."); /*para saber si se ejecuta la función desde el botón */
    var cantidad = document.querySelector("#cantidad").value;
    var quantity = document.querySelector(".cantidad");
    quantity.innerHTML = cantidad;

    var total = document.querySelector(".total");
    total.innerHTML = parseInt(cantidad * precio).toLocaleString("es-ES") + " CLP"; 
    /*investigué esta función (.toLocaleString("es-ES")) para darle formato al número!, 
    supongo existe otra manera */

    seleccion = document.querySelector('#colores');
    color = document.querySelector('.circulo');
    color.style.backgroundColor = seleccion.value;
}
