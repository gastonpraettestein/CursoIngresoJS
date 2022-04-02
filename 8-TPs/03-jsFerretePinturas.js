/*
Gaston Praettestein
ejer/tps 3-3
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let FahrenheitTemperatura;
    let FahrenheitCentigrados;

    FahrenheitTemperatura=document.getElementById('txtIdTemperatura').value;

    FahrenheitTemperatura=parseInt(FahrenheitTemperatura);

    FahrenheitCentigrados=(FahrenheitTemperatura-32)/1.8;
    
    alert(FahrenheitTemperatura+ ' Fahrenheit son ' + FahrenheitCentigrados.toFixed(2)+ ' centigrados');
}

function CentigradosFahrenheit () 
{
	let FahrenheitTemperatura;
    let FahrenheitCentigrados;

    FahrenheitTemperatura=document.getElementById('txtIdTemperatura').value;

    FahrenheitTemperatura=parseInt(FahrenheitTemperatura);

    FahrenheitCentigrados=FahrenheitTemperatura*1.8+32;
    
    alert(FahrenheitTemperatura+ ' Fahrenheit son ' + FahrenheitCentigrados.toFixed(2)+ ' centigrados');


}
