//Desarrollado Por Juan Felipe Valencia Murillo.
Vue.component('encabezado',{
	data(){
		return {
			host:location.origin+'/proesio/web-pipe/'
		}
	},
	mounted(){
		this.seleccionarBotonCargado();
	},
	methods:{
		seleccionarBotonCargado(){
			if(location.href==this.host) this.asignarEstiloBoton(document.getElementById('inicio'));
			if(location.href.indexOf('documentacion')>-1) this.asignarEstiloBoton(document.getElementById('documentacion'));
			if(location.href.indexOf('descargar')>-1) this.asignarEstiloBoton(document.getElementById('descargar'));
			if(location.href==this.host+'desarrollador/') this.asignarEstiloBoton(document.getElementById('desarrollador'));
		},
		asignarEstiloBoton(btn){
			btn.style.color='#5BC800';
			btn.style.borderTop='5px solid white';
			btn.style.borderBottom='5px solid #5BC800';
		}
	},
	template:`
		<header>
			<div class="logo">
				<a :href="host"><img :src="host+'imagenes/eslogan_pipe.png'" alt="ESLOGAN PIPE" style="width:auto; height:50px; margin-top:10px;"/></a>
				<!--<div class="titulo">PIPE</div>-->
				<!--<div class="slogan">ORM en Español</div>-->
			</div>
			<div class="rutas">
				<a :href="host"><button id="inicio"><i class="fas fa-home"></i> Inicio</button></a>
				<a :href="host+'documentacion/4.x'"><button id="documentacion"><i class="fas fa-book"></i> Documentación</button></a>
				<a :href="host+'descargar'"><button id="descargar"><i class="fas fa-download"></i> Descargar</button></a>
				<a :href="host+'desarrollador'"><button id="desarrollador"><i class="far fa-user"></i> Desarrollador</button></a>
			</div>
		</header>
	`
});
function abrirModal(id_modal){
	modal=document.getElementById(id_modal);
	modal.style.display='block';
	window.onclick=function(event){
		if(event.target==modal){
			modal.style.display='none';
		}
	}
}
function cerrarModal(id_modal){
	modal=document.getElementById(id_modal);
	modal.style.display='none';
}