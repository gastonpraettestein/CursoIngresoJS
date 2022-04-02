/*
Gaston Praettestein
Div J
ejer/While 09
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{		
	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	
	//iniciar variables
	banderaDelPrimero="subo";
	respuesta='si';
	
	
	
	while(respuesta=="si")
	{
		numeroIngresado=prompt('ingrese numero');
		numeroIngresado=parseInt(numeroIngresado);

		if(banderaDelPrimero=='subo')
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero='ya pase bajo';
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}

		}
		respuesta=prompt("desea continuar?");
	}
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN
