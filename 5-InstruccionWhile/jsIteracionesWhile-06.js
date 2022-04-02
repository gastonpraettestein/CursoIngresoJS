/*
Gaston Praettestein
eje/wh 6
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/
function mostrar()
{
	let contador;//variable de control
	let acumulador;
	let numeroIngresado;
	

	contador=0;//inicializacion de la let de control
	acumulador=0;
	
	while(contador<5)
	{
		numeroIngresado=prompt('ingrese numero');
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;

	}
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
}