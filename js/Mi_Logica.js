
$(document).ready(function(){
	
	var edificio = new Array ();

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
	 * evento
	 */

	function stopDefAction(evt) {
		evt.preventDefault();
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
			
			$("#listadoFull").click(function(){
				var limite = edificio.lenght;
				for (var i=0;i<limite;i++){
					var tmp = edificio[i];
					console.table(tmp);

				}
			});
			
			
			$("#formRegistro").validate({
				
				rules:{
					CC:{
						required:true,
						number:true,
						digits:true
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
					correo1:{
						equalTo:"#correo"						
					},									
					telefono:{
						required:true,
						number:true,
						digit:true,
						rangelenght:[7,10]
					},
					ciudad:{
						required:true,
						number:true						
					},
					genero:{
						required:true,
						number:true						
					}
					
					
				},
				messages:{
					CC:{
						digits:"uppss no puede tener ni comas, ni puntos"
					}
				},
				submitHandler:function(){
					//alert($("#formRegistro").serialize());ç+

					// objeto js
					var persona={
						cc:     $("#CC").val(),
						nom:    $("#nom").val(),
						ape:    $("#ape").val(),
						correo: $("#correo").val(),
						tel:    $("#tel").val(),
						ciudad: $("#ciudad").val(),
						genero: $("#genero").val()
					};

					//objeto json

					var datos, x, i, dbParam;
					

					datos ={
						"cc" : "#CC",
						"nom": "#nom",
						"ape": "#ape",
						"correo": "#correo",
						"tel": "#tel",
						"ciudad":"#ciudad",
						"genero":"#genero"
					};

					dbParam = JSON.stringify(datos);

					datos.cc,datos.nom,datos.ape,datos.correo,datos.tel,datos.ciudad,datos.genero;

						for (x in datos) {
							//alert("los datos son"+ x );
							edificio.push(x);
						}
					
					//edificio.push(datos);

					$("#limpiar").trigger("click");
					
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




