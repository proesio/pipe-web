//Desarrollado Por Juan Felipe Valencia Murillo.
var http="http://";
var linkMenuCargado=null;
$(document).ready(function(){
	setTimeout(function(){
	url=window.location+"";
	if(url==http+document.domain+'/pipe/#!/'){
		boton=document.getElementById("boton1");
		boton.style.color="#5BC800";
		boton.style.borderTop="5px solid white";
		boton.style.borderBottom="5px solid #5BC800";
	}
	else if(url==http+document.domain+'/pipe/#!/documentacion' || url.indexOf('#!/documentacion')>-1){
		boton=document.getElementById("boton2");
		boton.style.color="#5BC800";
		boton.style.borderTop="5px solid white";
		boton.style.borderBottom="5px solid #5BC800";
		version=typeof(url.split("/")[6])!=='undefined' ? url.split("/")[6] : '2.0';
		if(url.split("/").length>6){
		linkMenu=document.getElementById(url.split("/")[7]+version);
		linkMenu.style.color="#5BC800";
		linkMenu.style.fontWeight="bold";
		linkMenuCargado=linkMenu;
		}
		menuDocumentacion(version);
	}
	else if(url==http+document.domain+'/pipe/#!/descargar' || url.indexOf('#!/descargar')>-1){
		boton=document.getElementById("boton3");
		boton.style.color="#5BC800";
		boton.style.borderTop="5px solid white";
		boton.style.borderBottom="5px solid #5BC800";
		mostrarDescargas();
	}
	else if(url==http+document.domain+'/pipe/#!/desarrollador'){
		boton=document.getElementById("boton4");
		boton.style.color="#5BC800";
		boton.style.borderTop="5px solid white";
		boton.style.borderBottom="5px solid #5BC800";
	}
	},300);
});
var botonVisitado=null;
function estiloClick(boton){
	if(botonVisitado){
		botonVisitado.style.color=null;
		botonVisitado.style.borderTop=null;
		botonVisitado.style.borderBottom=null;
	}
	botones=document.getElementsByTagName('button');
	for(i=0; i<botones.length; i++){
		botones[i].style.color=null;
		botones[i].style.borderTop=null;
		botones[i].style.borderBottom=null;
	}
	boton.style.color="#5BC800";
	boton.style.borderTop="5px solid white";
	boton.style.borderBottom="5px solid #5BC800";
	botonVisitado=boton;
}
var vinculoVisitado=null;
function estiloLink(vinculo){
	eliminarLinkMenu();
	vinculo.style.color="#5BC800";
	vinculo.style.fontWeight="bold";
	vinculoVisitado=vinculo;
}
function mostrarDescargas(){
	$.ajax({
		method:'POST',
		url:'procesos/PROES_PROCESOS.php?mostrarDescargas',
		success:function(respuesta){
			$("#numero_descargas").html(new Intl.NumberFormat('es-CO').format(respuesta));
		}
	});
}
function abrirModal(id_modal){
	modal=document.getElementById(id_modal);
	modal.style.display="block";
	window.onclick=function(event){
		if(event.target==modal){
			modal.style.display="none";
		}
	}
}
function cerrarModal(id_modal){
	modal=document.getElementById(id_modal);
	modal.style.display="none";
}
function menuDocumentacion(version){
	document.getElementById('menu_documentacion'+version).style.display="block";
}
function ocultarMenuDocumentacion(){
	for(i=1; i<=2; i++) document.getElementById('menu_documentacion'+(i+'.0')).style.display="none";
}
function eliminarLinkMenu(){
	if(vinculoVisitado){
		vinculoVisitado.style.color=null;
		vinculoVisitado.style.fontWeight=null;
	}
	if(linkMenuCargado){
		linkMenuCargado.style.color=null;
		linkMenuCargado.style.fontWeight=null;
	}
}