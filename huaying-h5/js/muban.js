 /* swiper配置
 **************************************************/
$(document).ready(function(){
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		grabCursor: true, //鼠标变成手
		onSlideChangeStart: function(mySwiper) { //滑动结束回调函数
			var _pagenow = mySwiper.activeIndex
			if (_pagenow == 1 || _pagenow == 2) {
			};
			if (_pagenow == 4 || _pagenow == 0) {
				$(".content-slide img").css({
					"-webkit-transform": "translate3d(100px, 200px, 500px)"
				})
			}
		}
	})
});

