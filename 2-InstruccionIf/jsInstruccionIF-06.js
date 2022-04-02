/*
Gaston Praettestein
e/s if6
Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/
function mostrar()
{	
	let ingresarEdad;

	ingresarEdad = document.getElementById('txtIdEdad').value;
	ingresarEdad = parseInt(ingresarEdad);

	if(ingresarEdad >17)
	{
		alert('Usted tiene ' + ingresarEdad +' años, y es una persona mayor');
	}
	else
	{
		if(ingresarEdad <13)
		{
			alert('usted tiene '+ ingresarEdad + ' años y es un niño');
		}else
		{
			alert('usted tiene '+ ingresarEdad + ' años y es un adolecente');
		}
	}
	/*		
	4 a 3	
	if(edadIngresada>17)
	{
		alert("mayor");
	}
	if(edadIngresada>12 && edadIngresada<18)
	{
		alert("adolescente");
	}
	if(edadIngresada<13)
	{
		alert("menor");
	}
	

	1 o 2
	if(edadIngresada>17)
	{
		alert("mayor");
	}
	else
	{
		if(edadIngresada<13)
		{
			alert("menor");
		}else
		{
			alert("adolescente");
		}
	}
	
	error
	if(edadIngresada>17)
	{
		alert("mayor");
	}

	if(edadIngresada<13)
	{
		alert("menor");
	}else
	{
		alert("adolescente");
	}*/



}//FIN DE LA FUNCIÓN