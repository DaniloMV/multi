/*"use strict";*/

/*alert("Mamá no se programar");*/
/*on es un escuchador de eventos un lisener de eventos*/
$(document).on("ready", inicio);
function inicio (){
	//alert("Al fin se programar");
	//AQUI VA EL CÓDIGO PARA EJECUTAR MI APLICACIÓN
	$("#personalizar").on("click", transicion);
	$("#personalizacion #llantas figure").on("click", cambiarLlanta);
}
/*off apago el evento*/
/*Tres objetos nativos de windows  
navegador //Geo localizador, acelerometros, navegador
window //Tab, resoluci'on, dimensi'on, pos
document // <html>
Cuado manipulamos el document estamos manipulando
DOM Document Object Model
*/
/*El uso de variables o funciones anonimas produce una sobre carga en memoria ram*/
function transicion() {
	//alert("TEST TEST TEST");
	//OBJETO JAVASCRIPT JS/JSON 
	var cambiosCSS =
	{
			//color: "#F00",
			//width: "30%" 
			margin: 0,
			overflow: "hidden",
			padding: 0,
			width: 0 
	};
	var cambiosPerson = 
	{
		hidden: "auto",
		opacity: 1,
		width: "40%"
	};
	
	$("#historia").css(cambiosCSS);
	$("#personalizacion").css(cambiosPerson);
	$("#color div").on("click", cambiarColor);	
}
function cambiarColor(datos)
{
	console.log(datos);
	var col = datos.currentTarget.id;
	//alert(col);
	$("#cochecito img").attr("src", "c"+col+".png");
}
function cambiarLlanta(datos)
{
	//console.log(datos);
	var col = datos.currentTarget.id;
	//alert(col);
	$("#cochecito img").attr("src", col+".jpg");

	var cambiosLlantas = 
	{
		transform: "rotate(360deg)" 
	};
	$("#cochecito img").css(cambiosLlantas);
}
