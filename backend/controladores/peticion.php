<?php
//Desarrollado Por Juan Felipe Valencia Murillo.
session_start();
require '../config.php';
if(isset($_GET['api'])){
	$peticion=json_decode(json_encode($_GET));
	switch($_GET['api']){
		case 'descarga-obtener':
			echo DescargaControlador::obtenerTotalDescargas();
		break;
	}
}
if(isset($_POST['api'])){
	$peticion=json_decode(json_encode($_POST));
	switch($_POST['api']){
		case 'sesion-iniciar':
			echo SesionControlador::iniciarSesion($peticion);
		break;
		case 'sesion-cerrar':
			echo SesionControlador::cerrarSesion($peticion);
		break;
		case 'descarga-crear':
			$descargaControlador=new DescargaControlador();
			echo $descargaControlador->crear($peticion);
		break;
	}
}