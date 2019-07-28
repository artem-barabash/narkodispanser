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
			//infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			//variableWidth: true,
			prevArrow: '<button class="nth-prev"></button>',
    		nextArrow: '<button class="nth-next"></button>',
    		responsive: [{
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        infinite: true
		      }
		    },{
		      breakpoint: 479,
		      settings: {
		        slidesToShow: 1,
		        infinite: true
		      }
		    }]
		});

		$('.reviews-list').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			responsive: [{
		      breakpoint: 479,
		      settings: {
		        slidesToShow: 1,
		        infinite: true
		      }
		    }]
		});
    });
});