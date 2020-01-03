

$(document).ready(function(){ 

    var edificio = new Array ();

    var xmlhttp = new XMLHttpRequest();
    
    datos ={
        "cc" : "#CC",
        "nom": "#nom",
        "ape": "#ape",
        "correo": "#correo",
        "tel": "#tel",
        "ciudad":"#ciudad",
        "genero":"#genero"
    };
    
    
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        datos = JSON.parse(this.responseText);
    
        //document.getElementById("demo").innerHTML = myObj.name;
    
        for (x in datos) {
            //alert("los datos son"+ x );
            edificio.push(x);
        }
      }
    };
    xmlhttp.open("POST", "formulario.php", true);
    xmlhttp.send();
    
    

});

