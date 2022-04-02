/*
Gaston Praettestein
e/s if10
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{ 
	let notaRandom;
	let mensaje;

	notaRandom=Math.round(Math.random()* 9 + 1);
	
	if(notaRandom>8)
	{
		mensaje='excelente';
		alert('Excelente nota: '+ notaRandom);
	}
	else
	{
		if(notaRandom<4)
		{
			mensaje='regular';
			alert('vamos, la proxima se puede: '+ notaRandom);
		}
		else
		{
			mensaje='aprobo';
			alert('aprobo: '+ notaRandom);
		}
	}

}//FIN DE LA FUNCIÓN