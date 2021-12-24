$(function(){
	
	var delay = 4000; // 4 segundos tempo do slider
	var timeEffect = 2000 // 2 segundo tempo do efeito
	var curIndex = 0;
	var amt;

	initSlider();
	autoPlay();

	function initSlider(){
		amt = $('.sobre-autor').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;
		$('.sobre-autor').css('width',sizeBoxSingle+'%');
		$('.scroll-wraper').css('width',sizeContainer+'%');


		for(var i = 0; i < amt; i++){
			if(i == 0)
				$('.slider-bullets').append('<span style="background-color:rgb(71,37,99);"></span>');
			else
				$('.slider-bullets').append('<span></span>');
			
		}

	}

	function autoPlay(){
		setInterval(function(){
			curIndex++;
			if(curIndex == amt)
				curIndex = 0;
			goToSlider(curIndex);
		},delay) // tempo do slider
	}

	function goToSlider(curIndex){
		var offsetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
		$('.slider-bullets span').css('background-color','rgb(200,200,200)');
		$('.slider-bullets span').eq(curIndex).css('background-color','rgb(71,37,99)');
		$('.scrollEquipe').stop().animate({'scrollLeft':offsetX},timeEffect);
	}

	$(window).resize(function(){
		$('.scrollEquipe').stop().animate({'scrollLeft':0})
	})
})