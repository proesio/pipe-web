<?php
//Desarrollado Por Juan Felipe Valencia Murillo.
class UtilControlador{
	private static $clave='b97eac9e274ee5e9b4aa57dfaec28eb4';
	public static function encriptarContrasena($contrasena){
		return hash('sha256',self::$clave.$contrasena);
	}
	public static function verificarContrasena($contrasena,$cifrado){
		return ($cifrado==self::encriptarContrasena($contrasena));
	}
	public static function url($ruta=''){
		$protocolo=isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
		$dominio=$protocolo.$_SERVER['SERVER_NAME'].'/'.$ruta;
		return $dominio;
	}
}