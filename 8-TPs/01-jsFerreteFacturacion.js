/*1.
    gaston praettestein
    e/s 1-1 facturacin
    Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let suma;
	let precio1;
    let precio2;
    let precio3;

    precio1=document.getElementById('txtIdPrecioUno').value;
    precio2=document.getElementById('txtIdPrecioDos').value;
    precio3=document.getElementById('txtIdPrecioTres').value;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    suma=precio1+precio2+precio3;

    alert('la suma es '+suma);
}
function Promedio () 
{
    let suma;
    let promedio;
	let precio1;
    let precio2;
    let precio3;

    precio1=document.getElementById('txtIdPrecioUno').value;
    precio2=document.getElementById('txtIdPrecioDos').value;
    precio3=document.getElementById('txtIdPrecioTres').value;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    suma=(precio1+precio2+precio3);
    promedio=suma/3

    alert('el promedio es '+promedio);
}
function PrecioFinal () 
{
    let suma;
	let PrecioFinal;
    let iva;
	let precio1;
    let precio2;
    let precio3;

    precio1=document.getElementById('txtIdPrecioUno').value;
    precio2=document.getElementById('txtIdPrecioDos').value;
    precio3=document.getElementById('txtIdPrecioTres').value;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    suma=precio1+precio2+precio3;

    iva= suma*21/100;

    PrecioFinal=suma+iva;

    alert('el precio final es '+PrecioFinal);
}