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