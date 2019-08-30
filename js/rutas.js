//Desarrollado Por Juan Felipe Valencia Murillo.
var app = angular.module('pipe', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl:'paginas/inicio.html'
    })
	.when("/descargar", {
        templateUrl:'paginas/descargar.html'
    })
	.when("/descargar/versiones-anteriores", {
        templateUrl:'paginas/descargar_versiones_anteriores.html'
    })
	.when("/desarrollador", {
        templateUrl:'paginas/desarrollador.html'
    })
	.when("/documentacion", {
        templateUrl:'paginas/documentacion.html'
    })
	//Inicio rutas para la documentación 1.0
	.when("/documentacion/1.0/instalacion", {
        templateUrl:'paginas/documentacion/v1.0/instalacion.html'
    })
	.when("/documentacion/1.0/configuracion", {
        templateUrl:'paginas/documentacion/v1.0/configuracion.html'
    })
	.when("/documentacion/1.0/convenciones", {
        templateUrl:'paginas/documentacion/v1.0/convenciones.html'
    })
	.when("/documentacion/1.0/modelos-y-constructor-de-consultas", {
        templateUrl:'paginas/documentacion/v1.0/modelos_y_constructor_de_consultas.html'
    })
	.when("/documentacion/1.0/insertar", {
        templateUrl:'paginas/documentacion/v1.0/insertar.html'
    })
	.when("/documentacion/1.0/consultar", {
        templateUrl:'paginas/documentacion/v1.0/consultar.html'
    })
	.when("/documentacion/1.0/actualizar", {
        templateUrl:'paginas/documentacion/v1.0/actualizar.html'
    })
	.when("/documentacion/1.0/eliminar", {
        templateUrl:'paginas/documentacion/v1.0/eliminar.html'
    })
	.when("/documentacion/1.0/vaciar-tabla", {
        templateUrl:'paginas/documentacion/v1.0/vaciar_tabla.html'
    })
	.when("/documentacion/1.0/autenticar-usuarios", {
        templateUrl:'paginas/documentacion/v1.0/autenticar-usuarios.html'
    })
	//Fin rutas para la documentación 1.0
	//Inicio rutas para la documentación 2.0
	.when("/documentacion/2.0/instalacion", {
        templateUrl:'paginas/documentacion/v2.0/instalacion.html'
    })
	.when("/documentacion/2.0/configuracion", {
        templateUrl:'paginas/documentacion/v2.0/configuracion.html'
    })
	.when("/documentacion/2.0/convenciones", {
        templateUrl:'paginas/documentacion/v2.0/convenciones.html'
    })
	.when("/documentacion/2.0/modelos-y-constructor-de-consultas", {
        templateUrl:'paginas/documentacion/v2.0/modelos_y_constructor_de_consultas.html'
    })
	.when("/documentacion/2.0/insertar", {
        templateUrl:'paginas/documentacion/v2.0/insertar.html'
    })
	.when("/documentacion/2.0/consultar", {
        templateUrl:'paginas/documentacion/v2.0/consultar.html'
    })
	.when("/documentacion/2.0/actualizar", {
        templateUrl:'paginas/documentacion/v2.0/actualizar.html'
    })
	.when("/documentacion/2.0/eliminar", {
        templateUrl:'paginas/documentacion/v2.0/eliminar.html'
    })
	.when("/documentacion/2.0/vaciar-tabla", {
        templateUrl:'paginas/documentacion/v2.0/vaciar_tabla.html'
    })
	.when("/documentacion/2.0/autenticar-usuarios", {
        templateUrl:'paginas/documentacion/v2.0/autenticar-usuarios.html'
    })
	//Fin rutas para la documentación 2.0
	.otherwise({
        templateUrl:'paginas/pagina_no_encontrada.html'
    });
});