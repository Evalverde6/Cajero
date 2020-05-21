//Declarar varaibles
function cambiar_pantalla (){

    var bienvenida = document.getElementById("Bienvenida");
    var menu = document.getElementById("Menu");
    var retiromenu = document.getElementById("Retiromenu");
    var retirodet = document.getElementById("Retiro");
//    if (lado=1) {
//        switch (numero) {
//            case 1:
 
                if (window.getComputedStyle(menu).display !== 'none') {
                    menu.style.display = 'none';
                    retiromenu.style.display = 'flex';
                } else {
                    if (window.getComputedStyle(retiromenu).display !== 'none') {
                        retiromenu.style.display = 'none';
                        retirodet.style.display = 'flex' 
                    }
                }
                

    
//                break;
//            case 2:
 //               break;
   //         case 3:
     //           break;
       //     case 4:
         //       break;
           // default:
             //   break;
      //  }
    }

function x() {
    var menu = document.getElementById("Menu");
    var retiro = document.getElementById("Retiromenu");
    if (window.getComputedStyle(menu).display === "flex") {
      menu.style.display = "none";
      retiro.style.display = "flex";
    }
  }