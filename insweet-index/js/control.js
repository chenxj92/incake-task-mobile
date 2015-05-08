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
		$('.landmark .search').show();
		$('.landmark input')[0].focus();
	});
	$('.landmark').find('.btn').click(function(){
		var txt=$('.landmark input').val();
		if (txt=='') {
			$('.landmark .search').hide();
		$('.landmark>p').show();
		} else{
			$('.landmark .search').hide();
		$('.landmark>p').show();
		$('.landmark>p')[0].innerHTML=txt;
		$('.landmark input')[0].value='';
		}
	});
	//切换商圈
	$('.landmark .more').click(function(){
		$('.business_error').hide();
		business_switch();
		$('.landmark>p').toggle();
	});
	$('.business_circle .right li').click(function(){
		$('.business_error').hide();
		business_switch();
		$('.landmark>p').show();
	})
	function hasclass_on(){
		return $('.landmark .more').hasClass('on')?true:false;
	}
	function business_switch(){
		$('.business_circle').toggle();
		$('.landmark .search').hide();
		$('.landmark>p').toggle();
		var _title=$('.landmark>label').html();
		if (_title=='商圈') {
			$('.landmark>label').html('<i class=\"imooc-icon\">&#xe60b;</i>位置');
		} else{
			$('.landmark>label').html('商圈');
		}
	}
	//商圈选择
	$('.business_circle .left li').click(function(){
		$('.business_circle .left li').removeClass('active');
		$(this).addClass('active');
		var s=$(this).index();
		$('.business_circle .right ul').hide();
		$('.business_circle .right ul').eq(s).show();
	})
});



















