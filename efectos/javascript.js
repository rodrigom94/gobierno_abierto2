$(document).ready(function(){
  $('#bxslider1').bxSlider({
  	mode: "fade",
  	controls: false,
  	auto: true,
  	speed: 600
  });
});
$('#bxslider2').bxSlider({
    minSlides: 1,
    maxSlides: 8,
    slideWidth: 240,
    slideMargin: 0,
    ticker: true,
    speed: 100000,
    controls: true,
    keyboardEnabled: true	
});



/**
$("#contenedor_grande_articulo_1").click(function(){
	limpiar_contenedores_derechos();
	ajustar_marco_contenedores_izquierda();
	add_contenedores_izquierda();
	remover_activos();
	$(".modulo-2").addClass("modulo-2-izq")
	$(".modulo-2").addClass("modulo-2-article-izq")
	$("#contenedor_derecho_articulo_1").css("display","inline-block");
	$(".modulo-1").css("width","300px")
	$(".contenedor-grande-1-noticia").addClass("contenedor-grande-1-noticia-izq");

	$(this).addClass("contenedor-grande-articulo1-activo");
})
$("#contenedor_grande_articulo_2").click(function(){
	limpiar_contenedores_derechos();
	ajustar_marco_contenedores_izquierda();
	add_contenedores_izquierda();
	remover_activos();
	$("#contenedor_derecho_articulo_2").css("display","inline-block");

	$(this).addClass("contenedor-grande-articulo2-activo");

})
$("#contenedor_grande_articulo_3").click(function(){
	limpiar_contenedores_derechos();
	ajustar_marco_contenedores_izquierda();
	add_contenedores_izquierda();
	remover_activos();
	$("#contenedor_derecho_articulo_3").css("display","inline-block");
		$(this).addClass("contenedor-grande-articulo3-activo");
})
$("#contenedor_grande_articulo_4").click(function(){
	limpiar_contenedores_derechos();
	ajustar_marco_contenedores_izquierda();
	remover_activos();
	add_contenedores_izquierda();
	$("#contenedor_derecho_articulo_4").css("display","inline-block");
		$(this).addClass("contenedor-grande-articulo4-activo");
})
$("#contenedor_grande_articulo_5").click(function(){
	limpiar_contenedores_derechos();
	ajustar_marco_contenedores_izquierda();
	add_contenedores_izquierda();
	remover_activos();
	$("#contenedor_derecho_articulo_5").css("display","inline-block");
		$(this).addClass("contenedor-grande-articulo5-activo");
})
$("#contenedor_grande_articulo_6").click(function(){
	limpiar_contenedores_derechos();
	ajustar_marco_contenedores_izquierda();
	add_contenedores_izquierda();
	remover_activos();
	$("#contenedor_derecho_articulo_6").css("display","inline-block");
		$(this).addClass("contenedor-grande-articulo6-activo");
})
$("#contenedor_grande_articulo_7").click(function(){
	limpiar_contenedores_derechos();
	ajustar_marco_contenedores_izquierda();
	add_contenedores_izquierda();
	remover_activos();
	$("#contenedor_derecho_articulo_7").css("display","inline-block");
		$(this).addClass("contenedor-grande-articulo7-activo");
})
$("#contenedor_grande_articulo_8").click(function(){
	limpiar_contenedores_derechos();
	ajustar_marco_contenedores_izquierda();
	add_contenedores_izquierda();
	remover_activos();
	$("#contenedor_derecho_articulo_8").css("display","inline-block");
		$(this).addClass("contenedor-grande-articulo8-activo");
})
function limpiar_contenedores_derechos() {
	$("#contenedor_derecho_articulo_1").hide();
	$("#contenedor_derecho_articulo_2").hide();
	$("#contenedor_derecho_articulo_3").hide();
	$("#contenedor_derecho_articulo_4").hide();
	$("#contenedor_derecho_articulo_5").hide();
	$("#contenedor_derecho_articulo_6").hide();
	$("#contenedor_derecho_articulo_7").hide();
	$("#contenedor_derecho_articulo_8").hide()
}
function add_contenedores_izquierda(){
	$(".contenedor-grande-articulo").addClass("contenedor-grande-articulo-izquierda");
	
}
function ajustar_marco_contenedores_izquierda(){
	$(".contenedor-grande-1").addClass("contenedor-grande-1-izquierda")
}
function remover_activos(){
	$(".contenedor-grande-articulo-izquierda").removeClass("contenedor-grande-articulo1-activo");
	$(".contenedor-grande-articulo-izquierda").removeClass("contenedor-grande-articulo2-activo");
	$(".contenedor-grande-articulo-izquierda").removeClass("contenedor-grande-articulo3-activo");
	$(".contenedor-grande-articulo-izquierda").removeClass("contenedor-grande-articulo4-activo");
	$(".contenedor-grande-articulo-izquierda").removeClass("contenedor-grande-articulo5-activo");
	$(".contenedor-grande-articulo-izquierda").removeClass("contenedor-grande-articulo6-activo");
	$(".contenedor-grande-articulo-izquierda").removeClass("contenedor-grande-articulo7-activo");
	$(".contenedor-grande-articulo-izquierda").removeClass("contenedor-grande-articulo8-activo");
}
**/
