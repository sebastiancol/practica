<center>
    <h1>formulario de control de registros</h1>
    
    <div class="col-12">
    
     	<div class="col-4" style="float:left;">
     		<form id="formRegistro" name="formRegistro" >
     			<fieldset>
     				<legend>INGRESO DE DATOS:</legend>
             		<div class="col-12">
                 		<div class="label">
                 			<label>CC</label>
                 		</div>
                 		<div class="input">
                 			<input type="number" ID="CC" NAME="CC" VALUE="" placeholder="Digite cedula"/>
                 		</div>
             		</div>
             		
             		<div class="col-12">
                 		<div class="label">NOMBRE</div>
                 		<div class="input">
                 			<input type="text" id="nom" NAME="nom" VALUE="" placeholder="Digite nombre"/>
                 		</div>
             		
             		</div>
             		
             		<div class="col-12">
                 		<div class="label">APELLIDO</div>
                 		<div class="input">
                 			<input type="text" id="ape" NAME="ape" VALUE="" placeholder="Digite apellido"/>
                 		</div>
             		</div>
             		
             		<div class="col-12">
                 		<div class="label">CORREO</div>
                 		<div class="input">
                 			<input type="text" id="correo" NAME="correo" VALUE="" placeholder="Digite correo"/>
                 		</div>
             		</div>
             		
             		<div class="col-12">
                 		<div class="label">CONFICORREO</div>
                 		<div class="input">
                 			<input type="text" id="correo1" NAME="correo1" VALUE="" placeholder="Confirme correo"/>
                 		</div>
             		</div>
             		
             		<div class="col-12">
                 		<div class="label">TELEFONO</div>
                 		<div class="input">
                 			<input type="number" id="tel" NAME="tel" VALUE="" placeholder="Digite telefono celular"/>
                 		</div>
             		</div>
             		
             		<div class="col-12">
                 		<div class="label">CIUDAD</div>
                 		<div class="input">
                 			<select id="ciudad" name="ciudad">
                 				<option value="" selected>seleccione
                 				<option value="1">BOGOTA
                 				<option value="2">CALI
                 				<option value="3">MEDELLIN
                 			</select>
                 		</div>
             		</div>
             		
             		<div class="col-12">
                 		<div class="label">GENERO</div>
                 		<div class="input">
                 			<label>Femenino</label> 
                 			<input TYPE="RADIO" ID="genero" NAME="genero" value="1"/>
                 			<label>Masculino</label> 
                 			<input TYPE="RADIO" ID="genero" NAME="genero" value="2"/>
                 			<label>LGTBI</label> 
                 			<input TYPE="RADIO" ID="genero" NAME="genero" value="3"/>
                 		</div>
             		</div>
             		
             		<div>
             			<button type="submit" value="enviar">Registrar</button>
             			<button type="reset" id="limpiar">Cancelar</button>
             		</div>
         		</fieldset>
     		</form>
     		
     	</div>
     	
     	<div class="col-6" style="float:right;">
     		<div class="col-12">
     			<button type="button" id="listadoFull">TODOS</button>
     			<button>FEMENINO</button>
     			<button>MASCULINO</button>
     			<button>LGTBI</button>
     			<select id="ciudad" name="ciudad">
         				<option value="" selected>seleccione
         				<option value="1">BOGOTA
         				<option value="2">CALI
         				<option value="3">MEDELLIN
         		</select>	
     		</div>
     	</div>
     	
    </div>
</center>
