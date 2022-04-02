/*
Gaston Praettestein
ejer/wh 8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let flag;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	
	flag=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	
	while(respuesta=='si')
	{
		
		numeroIngresado=prompt('ingrese numero');
		numeroIngresado=parseInt(numeroIngresado);
		
		if(numeroIngresado>=0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
			//alert('positivos');
		}
		else
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
			flag=1;
			//alert('negativos');
		}
		respuesta=prompt('cargar otra respuesta si/no');
	}
	if (flag==0) //para que el inicializado quede en cero sino se ingresa un numero.
	{
		multiplicacionNegativos=0;
	}


	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN