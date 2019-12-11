
$(document).ready(function(){
	

	/*
	 * url: es donde voy a ir
	 * parametros: que voy a llevar
	 * metodo: que quiero hacer con la respuesta
	 * 
	 */
	function fajax(URL,parametros,metodo){
		$.ajax({
			url: URL,
			data: parametros,
			type:'POST',
			cache: false,
			dataType: 'html',
			success: function (datos){
				metodo(datos);
			},
			error: function (xhr,status){
				alert("EXISTE UN PROBLEMA")
			}
		});
		
	}

	/**
	 * 
	 * traer vista del planeta mercurio
	 */

	function traermercurio (){
		var url = "mercurio.php";
		var parametros = "acceso=true";
		var metodo=function (datos){
			$("#contenido").html(datos);
		};
		
		fajax(url,parametros,metodo);
	}

	/**
	 * 
	 * traer vista del planeta venus
	 */

	function traervenus (){
		var url = "venus.php";
		var parametros = "acceso=true";
		var metodo=function (datos){
			$ ("#contenido").html(datos);
		};
		
		fajax(url,parametros,metodo);
	}

	/**
	 * 
	 * traer vista del planeta tierra
	 */

	function traertierra (){
		var url = "tierra.php";
		var parametros = "acceso=true";
		var metodo=function (datos){
			$ ("#contenido").html(datos);
		};
		
		fajax(url,parametros,metodo);
	}
	
	/**
	 * 
	 * formulario de ingreso de datos
	 */

	function formulario (){
		var url = "formulario.php";
		var parametros = "acceso=true";
		var metodo=function (datos){
			$("#contenido").html(datos);
			
			$("#formRegistro").validate({
				
				rules:{
					CC:{
						required:true,
						number:true,
						digit:true
					},
					nom:{
						required:true,
						rangelenght:[3,70]
					},
					ape:{
						required:true,
						rangelenght:[3,70]
					},
					correo:{
						required:true,
						email:true
					},
					telefono:{
						required:true,
						number:true
					},
					
					
				}
				
				
			});
				
	
			
			
			
			
			
			
			
			
			
			
			
			
		};		
		fajax(url,parametros,metodo);
	}
	
	$("#traermercurio").click(function(){
		traermercurio();
	});
	
	$("#traervenus").click(function(){
		traervenus();
	});
	
	$("#traertierra").click(function(){
		traertierra();
	});
	
	$("#formulario").click(function(){
		formulario();
	});
});




