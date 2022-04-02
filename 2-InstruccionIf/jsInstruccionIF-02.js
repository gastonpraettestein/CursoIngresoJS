/*gaston praettestein
e/s if02
Al ingresar una edad debemos informar solo si la persona es mayor de edad*/
function mostrar()
{
	//tomo la edad  
	let mayorEdad;

	mayorEdad = document.getElementById('txtIdEdad').value;
	mayorEdad = parseInt(mayorEdad);

	if(mayorEdad > 17)
	{
		alert('Usted es mayor de edad y tiene ' +mayorEdad +' años');
	}
	

}//FIN DE LA FUNCIÓN