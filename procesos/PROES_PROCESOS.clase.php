<?php
//Desarrollado Por Juan Felipe Valencia Murillo.
	class PROES_PROCESOS{
		public function __construct(){
			
		}
		public function descargarPIPE(){
			header ("Content-Disposition: attachment; filename=PIPE_v1.0.zip");
			header ("Content-Type: application/octet-stream");
			if(readfile("../archivos/v1.0/PIPE_v1.0.zip")) return $this->contadorDescargas();;
		}
		public function mostrarDescargas(){
			$archivo="contador_descargas.txt";
			$f=fopen($archivo,"r");
			if($f) return fread($f, filesize($archivo));
		}
		private function contadorDescargas(){
			$archivo="contador_descargas.txt";
			$f=fopen($archivo,"r");
			if($f){
				$contador=fread($f,filesize($archivo));
				$contador=$contador+1;
				fclose($f);
			}
			$f=fopen($archivo,"w+");
			if($f){
				fwrite($f,$contador);
				fclose($f);
			}
			return $contador;
		}
	}