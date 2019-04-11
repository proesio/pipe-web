<?php
//Desarrollado Por Juan Felipe Valencia Murillo.
	include "PROES_PROCESOS.clase.php";
	$proes=new PROES_PROCESOS();
		if(isset($_GET['descargarPIPE'])){
			$proes->descargarPIPE();
		}
		else if(isset($_GET['mostrarDescargas'])){
			echo $proes->mostrarDescargas();
		}
	