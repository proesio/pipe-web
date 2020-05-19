<?php
//Desarrollado Por Juan Felipe Valencia Murillo.
class DescargaControlador{
	public function crear($peticion){
		Descarga::crear([
			'ip'=>$this->obtenerIpExterna(),
			'dispositivo'=>$this->obtenerDispositivo($_SERVER['HTTP_USER_AGENT']),
			'navegador'=>$this->obtenerNavegador($_SERVER['HTTP_USER_AGENT']),
		]);
		return json_encode(['estado'=>'exito']);
	}
	public static function obtenerTotalDescargas(){
		$total=Descarga::contar();
		return json_encode(['estado'=>'exito','datos'=>$total]);
	}
	//Inicio métodos privados.
	private function obtenerIpExterna(){
		if(isset($_SERVER['HTTP_CLIENT_IP']))
			$ipExterna=$_SERVER['HTTP_CLIENT_IP'];
		else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
			$ipExterna=$_SERVER['HTTP_X_FORWARDED_FOR'];
		else if(isset($_SERVER['HTTP_X_FORWARDED']))
			$ipExterna=$_SERVER['HTTP_X_FORWARDED'];
		else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
			$ipExterna=$_SERVER['HTTP_FORWARDED_FOR'];
		else if(isset($_SERVER['HTTP_FORWARDED']))
			$ipExterna=$_SERVER['HTTP_FORWARDED'];
		else if(isset($_SERVER['REMOTE_ADDR']))
			$ipExterna=$_SERVER['REMOTE_ADDR'];
		else
			$ipExterna='Unknown';
		return $ipExterna;
	}
	private function obtenerDispositivo($userAgent){
		if(preg_match('/Android/',$userAgent)){
			$dispositivo='Android';
		}
		else if(preg_match('/linux/i',$userAgent)){
			$dispositivo='Linux';
		}
		else if(preg_match('/iPhone/',$userAgent)){
			$dispositivo='iPhone';
		}
		else if(preg_match('/macintosh|mac os x/i',$userAgent)) {
			$dispositivo='Mac';
		}
		else if(preg_match('/windows|win32/i', $userAgent)) {
			$dispositivo='Windows';
		}
		else{
			$dispositivo='Unknown';
		}
		return $dispositivo;
	}
	private function obtenerNavegador($userAgent){
		if(preg_match('/Edge/i',$userAgent)){
			$navegador='Edge';
		}
		else if(preg_match('/Firefox/i',$userAgent)){
			$navegador='Firefox';
		}
		else if(preg_match('/Chrome/i',$userAgent)){
			$navegador='Chrome';
		}
		else if(preg_match('/Safari/i',$userAgent)){
			$navegador='Safari';
		}
		else if(preg_match('/Opera/i',$userAgent)){
			$navegador='Opera';
		}
		else if(preg_match('/Netscape/i',$userAgent)){
			$navegador='Netscape';
		}
		else{
			$navegador='Unknown';
		}
		return $navegador;
	}
	//Fin métodos privados.
}