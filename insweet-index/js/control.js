$(function() {
	//延迟加载
	$("img.lazy").lazyload();
	//轮播banner配置
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
	//午后茶点配置
	$('.thumbs-cotnainer').each(function() {
		$(this).swiper({
			slidesPerView: 'auto',
			calculateHeight: true,
			spaceBetween: 10
		})
	});
	//开关
	$('.switch').bind('click',function(){
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).addClass('off');
			$('.theme .incake').removeClass('active');
			$('.theme .insweet').addClass('active');
		} else if($(this).hasClass('off')){
			$(this).removeClass('off');
			$(this).addClass('on');
			$('.theme .insweet').removeClass('active');
			$('.theme .incake').addClass('active');
		}
	});
	//地址切换
	$('.landmark>p').click(function(){
		$(this).hide();
		$('.landmark>div').show();
	});
	$('.landmark').find('.btn').click(function(){
		console.log($(this).siblings('input').val)
	})
});



















