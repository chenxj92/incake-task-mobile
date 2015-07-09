require.config({
	paths: {
		"jquery": "jquery-1.8.2.min",
		"zepto": "zepto.min"
	}
});
define(['jquery', 'zepto'], function(jquery, zepto) {
	$(function() {
		$('.preview-small-box').click(function() {
			//创建蒙版图层
			$("<div>").prependTo($('body')).addClass('ui-mask');

			//创建图片

			var imgsrc = "./img/ditu.jpg",
				zWin = $(window),
				Img = new Image();
			Img.src = imgsrc;
			Img.onload = function() {
				var w = this.width,
					h = this.height,
					winWidth = zWin.width(),
					winHeight = zWin.height(),
					realw = parseInt((winWidth - winHeight * w / h) / 2),
					realh = parseInt((winHeight - winWidth * h / w) / 2);
				$('<img>').prependTo($('.ui-mask')).attr("src", Img.src).addClass('large-img').css({
					'width': 'auto',
					'height': 'auto'
				});
				if (h / w > 1.2) {
					$('.large-img').css({
						'height': winHeight,
						'margin-left': +realw + 'px'
					})
				} else {
					$('.large-img').css({
						'height': winWidth,
						'margin-top': +realh + 'px'
					})
				}

			};
		});
		$('.large-img').live('tap',function(e){
			e.stopPropagation();
		});
		$('.ui-mask').live('tap', function() {
			$(this).remove()
		});
		
	});
});