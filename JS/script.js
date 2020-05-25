//Declarar varaibles
function cambiar_pantalla (lado,numero){
    var menu = document.getElementById("Menu");
    var retiromenu = document.getElementById("Retiromenu");
    var retirodet = document.getElementById("Retiro");
   if (lado=1) {
      switch (numero) {
           case 1:
                if (window.getComputedStyle(menu).display !== 'none') {
                    menu.style.display = 'none';
                    retiromenu.style.display = 'flex';
                } else 
                    if (window.getComputedStyle(retiromenu).display !== 'none') {
                        retiromenu.style.display = 'none';
                        retirodet.style.display = 'flex' 
                    
                }
            break;
            case 2:
            break;
            case 3:
            break;
            case 4:
            break;
            default:
            break;
   }
}
}
function boton (num){
var bienvenida = document.getElementById("Bienvenida");
var pass = document.getElementById("clave").value;
    if (window.getComputedStyle(bienvenida).display !== 'none') {
        if (pass.length < 8) {
            document.getElementById("clave").value = pass + num;   
        }
}
}
function ok(){
var bienvenida = document.getElementById("Bienvenida");
var menu = document.getElementById("Menu")
var pass = document.getElementById("clave").value;
    if (window.getComputedStyle(bienvenida).display !== 'none') {
        if (pass !== '44443333') {
            document.getElementById("respuesta").innerHTML = '¡Clave incorrecta!';
        } else {
            bienvenida.style.display = 'none';
            menu.style.display = 'flex';
        }
        document.getElementById("clave").value = "";
    }
}