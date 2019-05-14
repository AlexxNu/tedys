
var pagActiva = $(".pagActiva").html();
    if (pagActiva != null) {
        var regPagActiva = pagActiva.replace(/-/g, " ");
        $(".pagActiva").html(regPagActiva);
    }
/*=============================================
ALTURA COMENTARIOS
=============================================*/

$(".comentarios").css({"height":$(".comentarios .alturaComentarios").height()+"px",
						"overflow":"hidden",
						"margin-bottom":"20px"})

$("#verMas").click(function(e){

	e.preventDefault();

	if($("#verMas").html() == "Ver más"){

		$(".comentarios").css({"overflow":"inherit"});

		$("#verMas").html("Ver menos"); 
	
	}else{

		$(".comentarios").css({"height":$(".comentarios .alturaComentarios").height()+"px",
								"overflow":"hidden",
								"margin-bottom":"20px"})

		$("#verMas").html("Ver más"); 
	}

})
/*=============================================
CONTADOR DE VISTAS
=============================================*/

var contador = 0;

$(window).on("load", function(){

	var vistas = $("span.vistas").html();
	var precio = $("span.vistas").attr("tipo");

	contador = Number(vistas) + 1;

	$("span.vistas").html(contador);

	// EVALUAMOS EL PRECIO PARA DEFINIR CAMPO A ACTUALIZAR

		var item = "vistas";

	// EVALUAMOS LA RUTA PARA DEFINIR EL PRODUCTO A ACTUALIZAR

	var urlActual = location.pathname;
	var ruta = urlActual.split("/");

	var datos = new FormData();

	datos.append("valor", contador);
	datos.append("item", item);
	datos.append("ruta", ruta.pop());


	$.ajax({

		url:rutaOculta+"ajax/producto.ajax.php",
		method:"POST",
		data: datos,
		cache: false,
		contentType: false,
		processData:false,
		success: function(respuesta){}

	});

})


 
