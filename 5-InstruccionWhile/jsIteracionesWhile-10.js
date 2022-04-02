/*
Gaston Praettestein
ejer/wh 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.//
3-Cantidad de positivos.//
4-Cantidad de negativos.//contadores
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.un if solo
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let contadorPositivo;
	let contadorNegativo;
	let contadorCeros;
	let contadorPar;
	let acumuladorPositivos;
	let acumuladorNegativos;
	let promedioPositivos=0;
	let promedioNegativos=0;
	let diferencia;
	
	respuesta="si";
	contadorPositivo=0;
	contadorNegativo=0;
	contadorCeros=0;
	contadorPar=0;
	acumuladorNegativos=0;
	acumuladorPositivos=0;
	
	while(respuesta=="si")
	{
			numeroIngresado=prompt('ingrese numero');
			numeroIngresado=parseInt(numeroIngresado);
			//1-Suma de los negativos.
			//2-Suma de los positivos.
			if(numeroIngresado<0)
			{
				acumuladorNegativos=acumuladorNegativos+numeroIngresado;
				contadorNegativo++;
			}
			else
			{
				if(numeroIngresado>0)
				{
					acumuladorPositivos=acumuladorPositivos+numeroIngresado;
					contadorPositivo++;
				}				
			}	
			//5-Cantidad de ceros.
			if (numeroIngresado==0)
			{
				contadorCeros++;
			}	
			//3-Cantidad de positivos.//
			//4-Cantidad de negativos.//contadores
			if (numeroIngresado %2==0)
			{
				contadorPar++;				
			}	

		respuesta=prompt("desea continuar?");
	}//fin del while
			if(contadorPositivo>0)
			{
				promedioPositivos=acumuladorPositivos/contadorPositivo;
			}
			if(contadorNegativo>0)
			{
				promedioNegativos=acumuladorNegativos/contadorNegativo;
			}
			
			diferencia=contadorPositivo-contadorNegativo;
			
	console.log('la suma de los negativos: '+acumuladorNegativos);
	console.log('la suma de los positivo'+acumuladorPositivos);
	console.log('la cantidad de pasitivos'+contadorPositivo);
	console.log('la cantidad de negativos '+contadorNegativo);
	console.log('la cantidad de pares: '+contadorPar);
	console.log('el promedio de positivos: '+promedioPositivos);
	console.log('el promedio de negativos: '+promedioNegativos);
	console.log('diferencia'+diferencia);
	
}//FIN DE LA FUNCIÓN