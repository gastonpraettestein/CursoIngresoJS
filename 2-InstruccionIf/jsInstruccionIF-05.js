/*
Gaston Praettestein
e/s if05
Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/
function mostrar()
{
	let ingresarEdad;

	ingresarEdad = document.getElementById('txtIdEdad').value;
	ingresarEdad = parseInt(ingresarEdad);

	if(ingresarEdad <12 || ingresarEdad >18)
	{
		alert('usted tiene ' + ingresarEdad + ' y no eres un adolecente.');
	}
	
	/*
	//Al ingresar una edad solo debemos 
	//informar si la persona
	//NO es adolescente.
	
	if(edadIngresada<13)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");	
	}
	if(edadIngresada>17)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}	


	//bien if(edadIngresada<13 || edadIngresada>17)
	if(!(edadIngresada>12 && edadIngresada<18))
	//error if(edadIngresada>13 || edadIngresada<17)// todos
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}	


	if(edadIngresada>12 && edadIngresada<18)
	{

	}else
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}	

	if(edadIngresada<13 || edadIngresada>17)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}*/
}//FIN DE LA FUNCIÓN