/*
Gaston Praettestein
e/s 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado = prompt("Por favor ingrese su nombre", "Escriba su nombre aqui");
	document.getElementById('txtIdNombre').value="Su nombre es "+nombreIngresado; 
	//ahora el cuadro de texto muestra la variable del prompt, donde cargamos el dato.
}
