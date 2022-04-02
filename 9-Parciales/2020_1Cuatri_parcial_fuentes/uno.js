/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe 
superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante 
swich
b) Del tipo con mas unidades, el promedio por compra 
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{	
	//ingreso de variables.
	let contador;
	let tipoDeProducto;
	let precioIngresado;
	let cantidadDeUniIngresado;
	let marcaIngresada;
	let fabricanteIngresado;

	//a
	let banderaMasBaratoAlcol;
	let cantidadUnidadesAlcohol;
	let fabricanteAlcoholBarato;
	let menorPrecioAlchol;

	//b
	let contadorAlcohol;
	let contadorJabon;
	let contadorBarbijo;
	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let promedioMasUnidades;
	let acumulaUnidadesAlcohol;
	let acumulaUnidadesJabon;
	let acumulaUnidadesBarbijo;


	contador=0;
	banderaMasBaratoAlcol=true;
	contadorAlcohol=0;
	contadorJabon=0;
	contadorBarbijo=0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
	promedioMasUnidades=0;
	acumulaUnidadesAlcohol=0;
	acumulaUnidadesJabon=0;
	acumulaUnidadesBarbijo=0;
	
	
	while(contador<10)
	{
		tipoDeProducto=prompt('ingrese su tipo producto');
		while(tipoDeProducto!='barbijo' && tipoDeProducto!='jabon' && tipoDeProducto!='alcohol')
		{
			tipoDeProducto=prompt('re-ingrese su tipo producto: barbijo, jabon, alcohol');
		}
		precioIngresado=prompt('ingrese su precio por favor');
		precioIngresado=parseInt(precioIngresado);
		while(precioIngresado>100 && precioIngresado>300)
		{
			precioIngresado=prompt('re-ingrese su precio por favor entre : 1 y 10000');
			precioIngresado=parseInt(precioIngresado);
		}
		cantidadDeUniIngresado=prompt('ingrese la cantidad de unidades por favor:');
		cantidadDeUniIngresado=prompt(cantidadDeUniIngresado);
		while(cantidadDeUniIngresado>1 && cantidadDeUniIngresado<1000)
		{
			cantidadDeUniIngresado=prompt('ingrese la cantidad de unidades por favor:');
			cantidadDeUniIngresado=prompt(cantidadDeUniIngresado);
		}
		marcaIngresada=prompt('ingrese su marca ');
		fabricanteIngresado=prompt('ingrese su fabricante:');

		//punto a
		switch(tipoDeProducto)
		{
			case 'alcohol':
				contadorAlcohol++;
				acumuladorAlcohol=acumuladorAlcohol+precio;
				acumulaUnidadesAlcohol=acumulaUnidadesAlcohol+cantidad;
				if(banderaMasBaratoAlcol==true)//a
				{
					cantidadDeUniIngresado=cantidadUnidadesAlcohol;
					fabricanteAlcoholBarato=fabricanteIngresado;
					menorPrecioAlchol=precioIngresado;
					banderaMasBaratoAlcol=false;
				}
				else
				{
					if(precioIngresado<menorPrecioAlchol)
					{
						cantidadDeUniIngresado=cantidadUnidadesAlcohol;
						fabricanteAlcoholBarato=fabricanteIngresado;
						menorPrecioAlchol=precioIngresado;
					}
				}
				break;
			case 'jabon':
				contadorJabon++;
				acumuladorJabon=acumuladorJabon+precio;
				acumulaUnidadesJabon=acumulaUnidadesJabon+cantidad;
					break;
				default:
					contadorBarbijo++;
					acumuladorBarbijo=acumuladorBarbijo+precio;
					acumulaUnidadesBarbijo=acumulaUnidadesBarbijo+cantidad;
					break;
		}
		if (acumulaUnidadesAlcohol>acumulaUnidadesJabon && acumulaUnidadesAlcohol>acumulaUnidadesBarbijo )
		{
			promedioMasUnidades=acumuladorAlcohol/contadorAlcohol;
		}
		else
		{
			if (acumulaUnidadesJabon>acumulaUnidadesBarbijo)
			{
				promedioMasUnidades=acumuladorJabon/contadorJabon;
			}
			else
			{
				promedioMasUnidades=acumuladorBarbijo/contadorBarbijo;
			}
		}
	}//fin del while
	document.write("a) Alcohol mas barato: "+"<br>"+" La cantidad de unidades es: "+cantidadAlcoholBarato+" y el fabricante es: "+fabricanteAlcoholBarato+"<br>");
	document.write("b) Del tipo con mas unidades, el promedio por compra es: "+promedioMasUnidades+"<br>");
	document.write("c) La cantidad total de jabones es: "+acumuladorJabon);
	
}
