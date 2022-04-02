/*
Gaston Praettestein
es 03 while
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	
	while(claveIngresada!='utn750')
	{
		alert('ayuda: es utn750');
		claveIngresada = prompt("re-ingrese el número clave correctamente");
	}

	alert('bienvenido a la utn');
}//FIN DE LA FUNCIÓN
//!= significa distinto