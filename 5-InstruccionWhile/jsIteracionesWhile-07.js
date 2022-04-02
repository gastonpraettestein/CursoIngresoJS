/*
Gaston Praettestein
Div J
ejercicio While 07
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;
	
	contador=0;
	acumulador=0;
	respuesta='si';
	
	while(respuesta=='si')
	{
		numeroIngresado=prompt('ingrese numero');
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		respuesta=prompt('cargar otra respuesta si/no');
	}

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN