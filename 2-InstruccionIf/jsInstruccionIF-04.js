/*gaston praettestein
e/s if04
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .*/
function mostrar()
{
	let ingresarEdad;

	ingresarEdad = document.getElementById('txtIdEdad').value;
	ingresarEdad = parseInt(ingresarEdad);

	if(ingresarEdad >12)
	{
		if(ingresarEdad <18)
		{
			alert('usted tiene ' + ingresarEdad + ' y  es un adolecente.');
		}
	}
	
		//tambien la forma correcta de usar el if es:
	/*if(ingresarEdad>12 && ingresarEdad <18)
	{
		alert('usted tiene ' + ingresarEdad + ' y no es un adolecente.')
	}*/
}//FIN DE LA FUNCIÓN