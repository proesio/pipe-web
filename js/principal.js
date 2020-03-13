//Desarrollado Por Juan Felipe Valencia Murillo.
var host=location.origin+'/pipe/#!/';
var linkMenuCargado=null;
$(document).ready(function(){
	setTimeout(function(){
	if(location.href==host){
		boton=document.getElementById("boton1");
		boton.style.color="#5BC800";
		boton.style.borderTop="5px solid white";
		boton.style.borderBottom="5px solid #5BC800";
	}
	else if(location.href==host+'documentacion' || location.href.indexOf('documentacion')>-1){
		boton=document.getElementById("boton2");
		boton.style.color="#5BC800";
		boton.style.borderTop="5px solid white";
		boton.style.borderBottom="5px solid #5BC800";
		let version=location.hash.split('/').length>2 ? location.hash.split('/')[2] : '2.0';
		if(location.hash.split('/').length>2){
			let arregloHash=location.hash.split('/');
			linkMenu=document.getElementById(arregloHash[3]+version);
			linkMenu.style.color="#5BC800";
			linkMenu.style.fontWeight="bold";
			linkMenuCargado=linkMenu;
		}
		menuDocumentacion(version);
	}
	else if(location.href==host+'descargar'){
		boton=document.getElementById("boton3");
		boton.style.color="#5BC800";
		boton.style.borderTop="5px solid white";
		boton.style.borderBottom="5px solid #5BC800";
	}
	else if(location.href==host+'desarrollador'){
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