$(document).ready(function () {
	$(document).ready(function(){
      	$('.slider-block').slick({
        	autoplay:true,
      		autoplaySpeed:2000,
      		dots: false,
      		prevArrow: '<button class="prev-btn"></button>',
    		nextArrow: '<button class="next-btn"></button>'
     	});


		$('.price-list').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4
		});

		$('.reviews-list').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3
		});
    });
});