/*
Gaston Praettestein
eje/tps 2-2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 
2 bolsas de cemento y 3 de cal, debemos mostrar cuantas 
bolsas se necesitan de cada uno para las medidas que
 nos ingresen.
*/

function Rectangulo () 
{
    
        let ancho;
        let largo;
        let perimetro;
        let vueltas;
        let alambre;
        let mensaje;
    
        ancho = document.getElementById("txtIdAncho").value;
        largo = document.getElementById("txtIdLargo").value;
    
        ancho = parseInt(ancho);
        largo = parseInt(largo);
    
        vueltas = 3;
        perimetro = 2*(ancho + largo);
        alambre = vueltas * perimetro;
    
        mensaje = "Se requerirán " + alambre + " unidades de alambre para el perímetro rectangular.";
    
        alert(mensaje);


}
function Circulo () 
{

    let radio;
    let alambre;
    let mensaje;

    
    radio = document.getElementById('txtIdRadio').value;
    radio = parseInt(radio);

    alambre = (2* radio * Math.PI)*3;
    //alambre=alambre.toFixed(2)
    mensaje="El alambre necesario es de " + alambre.toFixed(2);

    alert(mensaje);
    

}
function Materiales () 
{
	let anchoDelTerreno;
	let largoDelTerreno;
	let areaDelTerreno;
	let cantidadCemento;
	let cantidadCal;
	let mensaje;

	anchoDelTerreno = document.getElementById("txtIdAncho").value;
	largoDelTerreno = document.getElementById("txtIdLargo").value;

	anchoDelTerreno =parseInt(anchoDelTerreno);
	largoDelTerreno = parseInt(largoDelTerreno);

	areaDelTerreno = (anchoDelTerreno * largoDelTerreno);

	cantidadCemento = (areaDelTerreno*2);
	cantidadCal = (areaDelTerreno*3);

	mensaje = "Para un terreno de "+areaDelTerreno+" metros cuadrados, se necesitan "
	+cantidadCal+" bolsas de cal y "+cantidadCemento+" bolsas de cemento";

	alert(mensaje);
}
