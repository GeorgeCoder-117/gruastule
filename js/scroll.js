$(document).ready(function(){
	$('.scroll-up').hide();

	$(window).scroll(function(){
		if ($(this).scrollTop() > 300){ //this --> esta ventana .. scrollTop -->posicion arriba de la ventana 100-->pixeles de arriba a abajo
			$('.scroll-up').show('1000'); //fadeIn -->mostrar de nuevo
		}

		else {
			$('.scroll-up').hide('1000'); // fadeOut -->  desaparezca  1000 --> efecto de aparición en tiempo
		}
	});

	$('.scroll-up').click(function(){
		$('body, html').animate({
			scrollTop: 0 //Para que regrese al Inicio de arriba
		},200); // 200 velocidad de efecto hacia arriba
	});

});