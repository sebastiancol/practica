

/*
 * url: es donde voy a ir
 * parametros: que voy a llevar
 * metodo: que quiero hacer con la respuesta
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



