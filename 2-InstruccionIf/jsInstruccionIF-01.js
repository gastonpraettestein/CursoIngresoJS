/*
Gaston Praettestein
e/s if1
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/

function mostrar()
{
	//tomo la edad  
	let edadIngresada;
	//edadIngresada==21;
	
	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	//edadIngresada==15
	
	if(edadIngresada==15)
	{
		alert('niña bonita')
	}

	alert('fin de la funcion');

}//FIN DE LA FUNCIÓN