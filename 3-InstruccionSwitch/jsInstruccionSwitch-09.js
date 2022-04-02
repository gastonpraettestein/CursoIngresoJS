/*
Gaston Praettestein
E/s 09 switch
una agencia de viajes debe sacar las tarifas de los viajes ,
 se cobra $15.000 por cada estadia como base, se pide el ingreso
 de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba
 tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba
 tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y
 Cordoba tiene el precio sin descuento*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let estadia;
	let precioFinal;
	let porcentaje;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	estadia=15000;
	porcentaje=0;

	
	switch(estacionIngresada)
	{
		case 'Invierno':
			switch(destinoIngresado)
			{
				case 'Bariloche':
					porcentaje=20;
				break;
				case 'Cataratas':
				case 'Cordoba':
					porcentaje=-10;
				break;
				case 'Mar del plata':
					porcentaje=-20;
				break;
			}
			break;
		case 'Verano':
			switch(destinoIngresado)
			{
				case 'Bariloche':
					porcentaje=-20;
					break;
				case 'Cordoba':
				case 'Cataratas':
					porcentaje=10;
					break;
				case 'Mar del plata':
					porcentaje=20;
					break;
			}
		    break;
		case 'Otoño':
		case 'Primavera':
				switch(destinoIngresado)
				{
					case 'Bariloche':
					case 'Mar del plata':
					case 'Cataratas':
						porcentaje=10
						break;
					case 'Cordoba':
						porcentaje=0;
						break;					
				}
				break;

	}

	precioFinal=estadia*porcentaje/100;
	precioFinal=estadia+precioFinal;

	alert('La estadia custa $' + precioFinal);

	//var estacionIngresada =txtIdEstacion.value;
	//alert(estacionIngresada);

}//FIN DE LA FUNCIÓN