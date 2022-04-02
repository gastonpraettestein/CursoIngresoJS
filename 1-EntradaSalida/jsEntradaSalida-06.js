/*
Gaston Praettestein
e/s 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let suma;
	
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);//Esta es la forma correcta de usar el parseInt
	numeroDos=parseInt(numeroDos);// Esta la forma correcta de usar el parseInt
	
	suma=numeroUno+numeroDos;

	alert("La suma es " +suma);
	/*
	
	Primera forma:

	alert(parseInt(document.getElementById('txtIdNumeroUno').value)+parseInt(document.getElementById('txtIdNumeroDos').value));
	ahorrarse codigo es un mala practica.
	
    Segunda forma:
	let numeroY;
	numeroY=parseInt(document.getElementById('txtIdNumeroUno').value);
	let numeroX;
	numeroX=parseInt(document.getElementById('txtIdNumeroDos').value);
	let suma;
	suma=numeroY+numeroX;
	alert("el resultado es "+ suma);
	
    Tercer Forma: MAL NO HAY QUE AHORRARSE CÓDIGO
	let numeroY, numeroX, suma;
	
	numeroY=parseInt(document.getElementById('txtIdNumeroUno').value);
	
	numeroX=parseInt(document.getElementById('txtIdNumeroDos').value);
	suma=numeroY+numeroX;
	alert("el resultado es "+ suma);*/
}
