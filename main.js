

let documento = document.addEventListener('click',function(e){
    let lugar = e["path"]["0"]["id"]
    if(lugar == "logoID"){
        $('html, body').animate({
            scrollTop: $("#inicio").offset().top
          },
          500);
    }
    else if(lugar == "Buttoncontactame"){
        $('html, body').animate({
            scrollTop: $("#contacto").offset().top
          },
        500);
    }else if(lugar == "buttonTrabajos"){
        $('html, body').animate({
            scrollTop: $("#miJobs").offset().top
          },
          500);
    }else if(lugar == "buttonSobreMi"){
        $('html, body').animate({
            scrollTop: $("#SobreMi").offset().top
          },
          500);
    }
    else if(lugar == "bottonExperiecnia"){
        $('html, body').animate({
            scrollTop: $("#jobs__job").offset().top
          },
        500);
    }else if(lugar == "botonNosotros"){
        $('html, body').animate({
            scrollTop: $("#academy").offset().top
          },
        500);
    }else if(lugar == "buttonProyectos"){
         $('html, body').animate({
            scrollTop: $("#proyectos").offset().top
        },
        500);
    }else if(lugar == "buttonOpiniones"){
        $('html, body').animate({
            scrollTop: $("#testimonios").offset().top
        },
        500);

    }else if(lugar == "ir-arriba"){
        $('html, body').animate({
            scrollTop: $("#inicio").offset().top
        },
        500);
    }
});

window.onload = function() {
    var contenedor = document.getElementById('contenedor-carga');

      contenedor.style.visibility = 'hidden';
      contenedor.style.opacity = '0';

  }
  

let animado =
    document.querySelectorAll(".animado");

