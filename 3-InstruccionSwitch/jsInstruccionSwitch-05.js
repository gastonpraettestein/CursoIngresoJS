/*
Gaston Praettestein
eje/sw 05
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".*/
function mostrar()
{
	let horaDelDia;
	let mensaje;

	horaDelDia=document.getElementById('txtIdHora').value;
	
	switch(horaDelDia)
	{
		case '7':
		case '8':
		case '9':
		case '10':
		case '11':
			mensaje='es de mañana';
		break;
		default:
			mensaje='no es de mañana';
		break;
		
	}
	alert(mensaje);

	//tomo la hora
	//var horaDelDia =txtIdHora.value;
	//alert(horaDelDia);

}//FIN DE LA FUNCIÓN