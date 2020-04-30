
//Almacenar en "x" todos los elementos de la clase .close
let x = document.querySelectorAll(".access");

//Recorrer x 
x.forEach(function(link) {

//Agregar un evento "click" a cada elemento link
    link.addEventListener("click",function(ev){
      ev.preventDefault();

      let content = document.querySelector('.content');

//Quitar las clases de animación con classList
        content.classList.remove("fadeInUp");
        content.classList.remove("animated");

//Agregar clases para animar su salida faceOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

//Dar 6 milisegundos para leer la instrucción de redirección del link         
        setTimeout(() => {
            location.href="/menu";
        }, 600);

        return false
    });
    
});
