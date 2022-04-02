/*
Gaston Praettestein
e/s if07
Al ingresar una edad menor a 18 años y
 un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 
 'Es muy pequeño para NO ser soltero.'*/
 function mostrar()
 {
	 let edadIngresada;
	 let estadoCivil;
 
	 edadIngresada=document.getElementById('txtIdEdad').value;
	 estadoCivil=document.getElementById('estadoCivil').value;
 
	 edadIngresada=parseInt(edadIngresada);
 
	 /*if (edadIngresada <18)
	 {
		 if(estadoCivil!="Soltero")
		 {
			 alert("Es muy pequeño para NO ser soltero.");
		 }
	 }*/
	 if (edadIngresada<18 && estadoCivil!="Soltero")
	 {
		 alert("Es muy pequeño para NO ser soltero.");
	 }
 }//FIN DE LA FUNCIÓN