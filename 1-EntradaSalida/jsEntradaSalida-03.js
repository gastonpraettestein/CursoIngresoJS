/*
Gaston Praettestein
e/s 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
/* para encontrar el Id revisar el HTML, y ver cual es el ID. */ 
{
	let nombreIngresado;
	//nombreIngresado=txtIdNombre.value; esto esta mal
	//alert("ok");
	//a	nombreIngresado=document.getElementById('txtIdNombre'); asi dá error [object HTMLInputElement]
	nombreIngresado=document.getElementById('txtIdNombre').value;
	alert("El nombre ingresado es "+ nombreIngresado); 
	//Agrego texto y lo concateno con la variable para practicar y entender mejor estas funciones
	/*Agrego la variable nombre ingresado, que tomar el dato desde la caja de 
	texto que es txtIdNombre, se agrega .value para informar que es el valor*/
}
