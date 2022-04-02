/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudosX
c) La cantidad de hombres que hay solteros o viudos.x
d) cuantas personas de la tercera edad( mas de 60 años) ,
 tienen mas de 38 de temperaturax
e) El promedio de edad entre los hombres solteros.x*/

function mostrar()
{
	//variables
	let nombreIngresado;
	let estadoCivil;
	let edadIngresada;
	let sexoIngresado;
	let temperaturaIngresada;
	let respuesta;

	//a
	let banderaNombreConMasTemperatura;
	let primerNombreConMasTemperatura;
	let primeroConMasTemperatura;

	//b
	let contadorMayorDeEdadViudos;
	
	//c
	let contadorDeHombresSolterosViudos;

	//d
	let contadorDePersonasDeLaTerceraEdad;

	//e
	let acumuladorEdadHombresSolteros;
	let contadorDeHombresSolteros;
	let promedioHombresSolterosEdad;

	
	respuesta='si';
	banderaNombreConMasTemperatura=true;
	contadorMayorDeEdadViudos=0;
	contadorDeHombresSolterosViudos=0;
	contadorDePersonasDeLaTerceraEdad=0;
	acumuladorEdadHombresSolteros=0;
	contadorDeHombresSolteros=0;

	while(respuesta=='si')
	{
		nombreIngresado=prompt('ingrese su nombre por favor: ');
		estadoCivil=prompt('ingrese su estado civil');
		while(estadoCivil!='soltero' && estadoCivil!='casado' && estadoCivil!='viudo')
		{
			estadoCivil=prompt('re-ingrese su estado civil: soltero, casado, viudo');
		}
		edadIngresada=prompt('ingrese su edad:');
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<1)
		{
			edadIngresada=prompt('re-ingrese su edad:');
			edadIngresada=parseInt(edadIngresada);
		}
		sexoIngresado=prompt('ingrese su sexo:');
		while(sexoIngresado!='masculino' && sexoIngresado!='femenino')
		{
			sexoIngresado=prompt('re-ingrese su sexo: masculino o femenino');
		}
		temperaturaIngresada=prompt('ingrese su temperatura');
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(temperaturaIngresada<35)
		{
			temperaturaIngresada=prompt('re-ingrese su temperatura:');
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}
		//punto a
		if(temperaturaIngresada>38)
		{
			if(edadIngresada>60)
			{
				contadorDePersonasDeLaTerceraEdad++;
			}
			if(banderaNombreConMasTemperatura==true)
			{
				primerNombreConMasTemperatura=nombreIngresado;
				primeroConMasTemperatura=temperaturaIngresada;
				banderaNombreConMasTemperatura=false;
			}
			else
			{
				if(nombreIngresado>primerNombreConMasTemperatura)
				{
					primerNombreConMasTemperatura=nombreIngresado;
					primeroConMasTemperatura=temperaturaIngresada;
				}
			}
		}
		//punto b
		// La cantidad de hombres que hay solteros o viudos
		switch(estadoCivil)
		{
			case 'casado':
				break;
			case 'soltero':
				contadorDeHombresSolteros++;
				acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edadIngresada;
			case 'viudo':
				contadorDeHombresSolterosViudos++;
				if(edadIngresada>17 )
					{
						contadorMayorDeEdadViudos++;
					}
				break;
		}
		//e) El promedio de edad entre los hombres solteros.
		
		respuesta=prompt('desea agregar otra persona');
	}//fin del while
	promedioHombresSolterosEdad=acumuladorEdadHombresSolteros/contadorDeHombresSolteros;

	document.write('la persona con mas temperatura es: '+primerNombreConMasTemperatura+' y su temperatura es: '+primeroConMasTemperatura+'<br>');
	document.write('la cantidad de mayores viudos es: '+contadorMayorDeEdadViudos+'<br>');
	document.write('la cantidad de hombres solteros o vidos es: '+contadorDeHombresSolterosViudos+'<br>');
	document.write('la cantidad de personas con mayor de 38 de temperarura es: '+contadorDePersonasDeLaTerceraEdad+'<br>');
	document.write('el promedio de hombres solteros segun su edad es: '+promedioHombresSolterosEdad+'<br>');
	
}
