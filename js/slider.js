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
			slidesToScroll: 4,
			variableWidth: true,
			prevArrow: '<button class="nth-prev"></button>',
    		nextArrow: '<button class="nth-next"></button>'
		});

		$('.reviews-list').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			responsive: [
				{
					breakpoint: 320,
					settings: {
						slidesToShow: 1,
  						adaptiveHeight: true
					}
				}
			]
		});
    });
});