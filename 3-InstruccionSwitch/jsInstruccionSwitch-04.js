/*
Gaston Praettestein
eje/sw 04
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case 'Febrero':
			mensaje='Tiene 28 dias';
		break;
		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Nobiembre':
		 	mensaje='Tiene 30 dias';
		break;
		default:
			mensaje='Tienen 31 dias';
		break;
	}
	
	alert(mensaje);


	//tomo el mes
	//var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);
	
}//FIN DE LA FUNCIÓN