/*
Gaston Praettestein
Realizar el algoritmo que permita ingresar los datos de una compra
 productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
  //variables de ingresos
  let tipoDeProducto;
  let cantidadDeBolsasIngresadas;
  let precioIngresado;
  let respuesta;

  //variables de operacion 
  //a
  let precioBruto;
  let acumuladorPrecioBruto;
  let sumaAcumuladoresDeBolsas;
  //let acumuladoDeBolsas; como hice acumuladores por tipo(arena,cal,cemento) los sumo y me va a dar el total no necesito acumular bolsas.

  //b
  let descuento;
  let precioFinalConDescuento;
  let mensajePrecioConDescuento;

  //d
  let acumuladoDeBolsasArena;
  let acumuladoDeBolsasCal;
  let acumuladoDeBolsasCemento;
  let mensajeTipoConMayorCantidadDeBolsas;

  //f
  let banderDelTipoMasCaro;
  let primerPrecioMasCaro;
  let primerTipoMasCaro;



  respuesta='si';
  acumuladorPrecioBruto=0;
  acumuladoDeBolsas=0;
  acumuladoDeBolsasArena=0;
  acumuladoDeBolsasCal=0;
  acumuladoDeBolsasCemento=0;
  banderDelTipoMasCaro=true;
  mensajePrecioConDescuento='no hay descuento';

  while(respuesta=='si')
  {
    tipoDeProducto=prompt('ingrese su tipo de producto');
    while(tipoDeProducto!='arena' && tipoDeProducto!='cal' && tipoDeProducto!='cemento')
    {
      tipoDeProducto=prompt('re-ingrese su tipo de producto');
    }
    cantidadDeBolsasIngresadas=prompt('ingrese cantidad de bolsas');
    cantidadDeBolsasIngresadas=parseInt(cantidadDeBolsasIngresadas);
    while(cantidadDeBolsasIngresadas<0)
    {
      cantidadDeBolsasIngresadas=prompt('re-ingrese cantidad de bolsas');
      cantidadDeBolsasIngresadas=parseInt(cantidadDeBolsasIngresadas);
    }
    precioIngresado=prompt('ingresa su precio');
    precioIngresado=parseInt(precioIngresado);
    while(precioIngresado<0)
    {
      precioIngresado=prompt('ingresa su precio');
      precioIngresado=parseInt(precioIngresado);
    }
    //punto d
    switch(tipoDeProducto)
    {
      case 'arena':
        acumuladoDeBolsasArena=acumuladoDeBolsasArena+cantidadDeBolsasIngresadas;
      break;
      case 'cal':
        acumuladoDeBolsasCal=acumuladoDeBolsasCal+cantidadDeBolsasIngresadas;
      break;
      case 'cemento':
        acumuladoDeBolsasCemento=acumuladoDeBolsasCemento+cantidadDeBolsasIngresadas;
      break;
    }
    //punto f
    if(banderDelTipoMasCaro==true)
    {
      primerPrecioMasCaro=precioIngresado;
      primerTipoMasCaro=tipoDeProducto;
      banderDelTipoMasCaro=false;
    }
    else
    {
      if(precioIngresado>primerPrecioMasCaro)
      {
        primerPrecioMasCaro=precioIngresado;
        primerTipoMasCaro=tipoDeProducto;
      }
    }

    //punto a:

    precioBruto=precioIngresado*cantidadDeBolsasIngresadas;
    acumuladorPrecioBruto=acumuladorPrecioBruto+precioBruto;//el acumulador lo pongo de abajo porque asi acumulo el precio
    
    //punto b (primer logica pensada)

    //acumuladoDeBolsas=acumuladoDeBolsas+cantidadDeBolsasIngresadas; lo comento xq voy a sumar los acumuladores por tipo.


    respuesta=prompt('desea agregar otro producto');
  }//fin del while

  //punto b segunda logica sume los acumuladores por tipo y asi saque el total de bolsas compradas.
  sumaAcumuladoresDeBolsas=acumuladoDeBolsasArena+acumuladoDeBolsasCal+acumuladoDeBolsasCemento;

  //punto b comparacion de bolsas
  if(sumaAcumuladoresDeBolsas>10)
  {
    if(sumaAcumuladoresDeBolsas>30)
    {
      descuento=(acumuladorPrecioBruto*25)/100;
      precioFinalConDescuento=acumuladorPrecioBruto-descuento;
      mensajePrecioConDescuento='el precio con 25% de descuento es: '+precioFinalConDescuento;
    }
    else
    {
      descuento=(acumuladorPrecioBruto*15)/100;
      precioFinalConDescuento=acumuladorPrecioBruto-descuento;
      mensajePrecioConDescuento='el precio con 15% de descuento es: '+precioFinalConDescuento;
    }
  }

  
  //punto d comparacion de bolsas
  if(acumuladoDeBolsasArena>acumuladoDeBolsasCal && acumuladoDeBolsasArena>acumuladoDeBolsasCemento)
  {
    mensajeTipoConMayorCantidadDeBolsas='el tipo con mayor cantidad de bolsas es: arena';
  }
  else
  {
    if(acumuladoDeBolsasCal>acumuladoDeBolsasCemento)
    {
      mensajeTipoConMayorCantidadDeBolsas='el tipo con mayor cantidad de bolsas es: cal';
    }
    else
    {
      mensajeTipoConMayorCantidadDeBolsas='el tipo con mayor cantidad de bolsas es: cemento';
    }
  }
  document.write('el importe total a pagar sin descuento es: '+acumuladorPrecioBruto+'<br>');//a
  document.write(mensajePrecioConDescuento+'<br>');//b
  document.write(mensajeTipoConMayorCantidadDeBolsas+'<br>');//d
  document.write('el tipo de producto mas caro es: '+primerTipoMasCaro+' y su precio es'+primerPrecioMasCaro+'<br>');//f
}
