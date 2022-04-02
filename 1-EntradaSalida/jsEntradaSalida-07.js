/*
Gaston Praettestein
e/s 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let suma;

	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	suma=numeroUno+numeroDos;
	
	alert("La suma es "+ suma);
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let restar;

	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	restar=numeroUno-numeroDos;
	
	alert("La resta es "+ restar);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let multiplicar;

	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	multiplicar=numeroUno*numeroDos;
	
	alert("La multiplicación es "+ multiplicar);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let dividir;

	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	dividir=numeroUno/numeroDos;
	
	alert("La división es "+ dividir);
}