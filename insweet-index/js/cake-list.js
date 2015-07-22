;$(function(){
	//轮播
	$('.new_banner').each(function() {
		var count = $(this).find(".swiper-slide").length;
		if (count > 1) {
			$this = $(this).swiper({
				pagination: '.pagination_a',
				loop: true,
				centeredSlides: true,
				autoplay: 5000,
				speed: 500,
				autoplayDisableOnInteraction: false
			})
		} else {
			$this = $(this).swiper()
		}
	});
	//筛选
	$("menu .screen-btn").toggle(function(){
		$(".ui_mask").show().css('background-color','#000000');
		$("dl.screening-content").show()
	},function(){
		$(".ui_mask").hide().css('background-color','#fff');
		$("dl.screening-content").hide()
	})
});