/*
Gaston Praettestein
eje/sw 08
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado=document.getElementById('txtIdDestino').value;
	

	switch(destinoIngresado)
	{
		case 'Bariloche':
		case 'Ushuaia':
			mensaje='Hace frio';
		break;
		case 'Mar del plata':
		case 'Cataratas':
			mensaje='hace calor';
		break;
	}
	alert(mensaje);

	//var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);

}//FIN DE LA FUNCIÓN