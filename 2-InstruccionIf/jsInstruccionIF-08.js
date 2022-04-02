/*
Gaston Praettestein
e/s if08
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y 
no es menor.'*/
function mostrar()
{
	let ingresarEdad;
	let estadoCivil;

	ingresarEdad=document.getElementById('txtIdEdad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	
	ingresarEdad=parseInt(ingresarEdad);

	if(ingresarEdad >17 && estadoCivil=='soltero')
	{
		alert('Es soltero y no es menor');
	}
}//FIN DE LA FUNCIÓN