$(function(){
	$('.taocan_banner').each(function() {
		var count = $(this).find(".swiper-slide").length;
		if (count > 1) {
			$this = $(this).swiper({
				loop: true,
				centeredSlides: true,
				autoplay: 5000,
				speed: 500,
				autoplayDisableOnInteraction: false
			})
		} else {
			 $(this).swiper()
		}
	});
})
