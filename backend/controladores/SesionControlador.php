<?php
//Desarrollado Por Juan Felipe Valencia Murillo.
class SesionControlador{
	public static function iniciarSesion($peticion){
		$cifrado=UtilControlador::encriptarContrasena($peticion->contrasena);
		$usuario=Usuario::donde('correo=? y contrasena=?',[$peticion->correo,$cifrado]);
		if($usuario->existe()){
			$_SESSION['LOGUEADO']=true;
			$_SESSION['USUARIO_ID']=$usuario->obtener()[0]->id;
			return json_encode(['estado'=>'exito']);
		}
		else{
			return json_encode(['estado'=>'UsuarioNoEncontrado']);
		}
	}
	public static function cerrarSesion($peticion){
		session_destroy();
		return json_encode(['estado'=>'exito']);
	}
}