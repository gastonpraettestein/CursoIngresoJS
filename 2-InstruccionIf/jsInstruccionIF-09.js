/*
Gaston Praettestein
e/s 09
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let mostrarNumero;

	mostrarNumero=Math.round(Math.random()*10) +1;
	
	numeroRandom=parseInt(numeroRandom);

	alert(mostrarNumero);
}//FIN DE LA FUNCIÓN
//numeroRandom=(Math.random()+1)*10; La instrución solo muestra numeros del 0 al 9.
//numeroRandom=Math.random()*11;   solo me muestra del 0 al 10