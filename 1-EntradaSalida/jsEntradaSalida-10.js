/*
Gaston Praettestein
e/s 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let	resultado;
	let precioDescuento;

	importe=document.getElementById('txtIdImporte').value;
	descuento=prompt("Ingrese el descuento", "10");
	
	importe=parseInt(importe);
	descuento=parseInt(descuento);

	resultado=importe*descuento/100;
	//resultado=importe*0,75; esta mal por que no tengo el control de la función.

	precioDescuento=importe-resultado;

	document.getElementById('txtIdResultado').value="El importe final es "+precioDescuento;	
}
//txtIdImporte
//txtIdResultado