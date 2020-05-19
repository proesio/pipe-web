<?php
//Desarrollado Por Juan Felipe Valencia Murillo.
require 'pipe/PIPE.php';
require 'controladores/UtilControlador.php';
require 'controladores/SesionControlador.php';
require 'controladores/DescargaControlador.php';
use PIPE\Clases\Configuracion;
Configuracion::inicializar([
	'BD_CONTROLADOR'=>'sqlite',
	'BD_BASEDATOS'=>__DIR__.'\basedatos\pipe.sql',
	'BD_CODIFICACION'=>'utf8mb4',
	'IDIOMA'=>'es',
	'RUTA_MODELOS'=>__DIR__.'\modelos',
	'ZONA_HORARIA'=>'America/Bogota'
]);