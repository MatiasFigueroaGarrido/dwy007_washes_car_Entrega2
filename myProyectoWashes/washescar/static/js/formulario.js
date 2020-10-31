function mostrar() {
  var tamanio = window.matchMedia("(min-width: 360px) and (max-width: 640px)")
  if (tamanio.matches){
    document.getElementById("sidebar").style.width = "100%";
    document.getElementById("contenido").style.marginLeft = "0%";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
  }
  else{
    document.getElementById("sidebar").style.width = "20%";
    document.getElementById("contenido").style.marginLeft = "20%";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
  }
}
  
function ocultar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("contenido").style.marginLeft = "0";
  document.getElementById("abrir").style.display = "inline";
  document.getElementById("cerrar").style.display = "none";
}



letras = "abcdefghijklmnñopqrstuvwxyz";
especiales = "8-37-38-46-164";
espacio =" ";
caracteres = "*-_#/\.$,<>^+";
numeros = "1234567890";


function validarRut() {
  var rut = document.getElementById("txtRut").value;
  if (rut.length != 10) {
      alert("rut no tiene el largo necesario de 10");
      return false;
  }
  var num = 3; 
  var suma = 0;
  for (let index = 0; index < 8; index++) {
      var carac = rut.slice(index, index + 1);
      suma = suma + (carac * num);
      num = num - 1;
      if (num == 1) {
          num = 7;
      }
  }
  var resto = suma % 11;
  var dv = 11 - resto;
  if (dv > 9) {
      if (dv == 10) {
          dv = 'K';
      } else {
          dv = 0;
      }
  }
  var dv_usuario = rut.slice(-1).toUpperCase();
  if (dv != dv_usuario) {
      alert("rut incorrecto");
      return false;
  }
  alert("Rut Validado Exitosamente");
  return true;
 
}

function validaFecha() {
 var fechaFormulario = document.getElementById("txtFechaNacimiento").value;
 var fechaSistema = new Date();

 var anno = fechaFormulario.slice(0, 4);
 var mes = fechaFormulario.slice(5, 7);
 var dia = fechaFormulario.slice(8, 10);

 var fechaMia = new Date(anno, (mes - 1), dia);

 if (fechaMia > fechaSistema) {
    alert("fecha incorrecta");
    return false;
 } else {
 
    return true;
 }

}

function sololetras(e){
  key = e.keyCode || e.which;
  teclado = String.fromCharCode(key).toLowerCase();
  teclado_especial = false;
  for(var i in especiales){
    if (key==especiales[i]){
      teclado_especial=true;
      break;
    }

  }

  if (letras.indexOf(teclado)==-1 && !teclado_especial){
      alert("Campo de solo letras");
      return false;
    
  }
}

function noespacios(e){
  key = e.keyCode || e.which;
  teclado = String.fromCharCode(key).toLowerCase();
  teclado_especial = false;
  for(var i in especiales){
    if (key==especiales[i]){
      teclado_especial=true;
      break;
    }

  }
    
  if (espacio.indexOf(teclado)!=-1 && !teclado_especial){
      alert("No se pueden colocar espacios")
      return false;
  }
    
}

function errorConfirmar(e){
  key = e.keyCode || e.which;
  teclado = String.fromCharCode(key).toLowerCase();
  primer_contrasenia = document.getElementById("txtContrasena").value;
  if (primer_contrasenia.length() == 0 || /^\s+$/.test(primer_contrasenia)){
     alert("Debe ingresar contraseña a confirmar");
     return false;
  }
  else{
      alert("hola");
  }
}


function confirmarcontrasenia(e){
  key = e.keyCode || e.which;
  teclado = String.fromCharCode(key).toLowerCase();
  for (var i in especiales){
      if (key==especiales){
          break;
      } else {	  
          primer_contrasenia = document.getElementById("txtContrasena").value;
          var elemento = document.getElementById("Confirmacion");
	  contrasenia2 = document.getElementById("txtContrasena2").value;
          if (contrasenia2 != primer_contrasenia){
            console.log(elemento.innerHTML)
            elemento.innerHTML = "No coinciden las Contraseñas";
            break;
          }
          else{
            elemento.innerHTML = "Las contraseñas coinciden";
            break;
         }
          
      }
  }
  
}

function sololetras2(e){
  key = e.keyCode || e.which;
  teclado = String.fromCharCode(key).toLowerCase();
  teclado_especial = false;
  for(var i in especiales){
    if (key==especiales[i]){
      teclado_especial=true;
      break;
    }

  }
  espacioLetra = letras + espacio;

  if (espacioLetra.indexOf(teclado)==-1 && !teclado_especial){
      alert("Campo de solo letras");
      return false;
    
  }
}

function caracterContrasenia(e){
  key = e.keyCode || e.which;
  teclado = String.fromCharCode(key).toLowerCase();
  teclado_especial = false;
  caracter = letras + numeros + caracteres;
  for(var i in especiales){
    if (key==especiales[i]){
      teclado_especial=true;
      break;
    }

  }
    
  if (espacio.indexOf(teclado)!=-1 && !teclado_especial){
      alert("No se pueden colocar espacios");
      return false;
  } 
  if (caracter.indexOf(teclado)==-1 && !teclado_especial){
      alert("Solo se permiten letras, números y los siguientes caracteres: " + caracteres);
      return false;
      
  }
}

function campoVacio(palabra){
    if (palabra.length() == 0 || /^\s+$/.test(palabra)){
        return false;
    } else {
        return true;
    }
}

function contraseniaConfirma(contrasenia1, contrasenia2){
     if (contrasenia1 == contrasenia2){
         return true;
     } else{
        return false;    
     }
     
}

function validarFormulario() {
 var resp = false;
 nombre = document.getElementById("txtNombre").value;
 apellido = document.getElementById("txtApellido").value;
 correo = document.getElementById("txtEmail").value;
 usuario = document.getElementById("txtNombreUsuario").value;
 primer_contrasenia = document.getElementById("txtContrasena").value;
 segunda_contrasenia = document.getElementById("txtContrasena").value;
 
 resp = campoVacio(nombre);
 if (resp == false){
     alert("El nombre no puede estar vació o solo contener espacios");
     return false;
 }
 
resp = campoVacio(apellido);
 if (resp == false){
     alert("El apellido no puede estar vació o solo contener espacios");
     return false;
 }
resp = campoVacio(correo);
 if (resp == false){
     alert("El Email no puede estar vació o solo contener espacios");
     return false;
 }
resp = campoVacio(usuario);
 if (resp == false){
     alert("El nombre de usuario no puede estar vació o solo contener espacios");
     return false;
 }
resp = campoVacio(primer_contrasenia);
 if (resp == false){
     alert("La contraseña no puede estar vacia o solo contener espacios");
     return false;
 }
    
 resp = contraseniaConfirma(primer_contrasenia, segunda_contrasenia);
 if (resp == false) {
     alert("Las contraseñas ingresadas no coinciden");
     return false; 
 }
 
 return resp;

}
