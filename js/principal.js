//Desarrollado Por Juan Felipe Valencia Murillo.
menuDocumentacion('ocultar');
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
		if(url.split("/").length>6){
		linkMenu=document.getElementById(url.split("/")[7]);
		linkMenu.style.color="#5BC800";
		linkMenu.style.fontWeight="bold";
		linkMenuCargado=linkMenu;
		}
		menuDocumentacion('mostrar');
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
function menuDocumentacion(accion){
	switch(accion){
		case "mostrar":
			document.getElementById('menu_documentacion').style.display="block";
		break;
		case "ocultar":
			document.getElementById('menu_documentacion').style.display="none";
		break;
	}
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