/*
Gaston Praettestein
eje/wh 5
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado=sexoIngresado.toUpperCase();
	//.toUpperCase() (cumple la funcion de que 'f' y 'm' sea tomada tanto como mayuscula o minuscula)
	
	while(sexoIngresado != 'f' && sexoIngresado != 'm')
		{
			sexoIngresado = prompt("error re-ingrese f ó m .");
			
		}

		document.getElementById('txtIdSexo').value=sexoIngresado;
	
	//txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN