require.config({
	paths: {
		"jquery": "jquery-1.8.2.min",
		"zepto": "zepto.min"
	}
});
define(['jquery', 'zepto'], function(jquery, zepto) {
	var hastouch = "ontouchstart" in window ? true : false,
		tapstart = hastouch ? "tap" : "click";
	$(function() {
		var Imgssrc = $('.pr-small-pic').attr('data-src'),
			Imgs = new Image();
		Imgs.src = Imgssrc;
		Imgs.onload = function() {
			var w = this.width,
				h = this.height,
				boxWidth = $('.preview-small-box').width(),
				boxHeight = $('.preview-small-box').height(),
				realw = parseInt((boxWidth - boxHeight * w / h) / 2),
				realh = parseInt((boxHeight - boxWidth * h / w) / 2);
			$('.pr-small-pic').attr("src", Imgs.src);
			if (h / w > 1.2) {
				$('.pr-small-pic').css({
					'height': boxHeight,
					'width': 'auto',
					'margin-left': +realw + 'px'
				})
			} else {
				$('.pr-small-pic').css({
					'width': boxWidth,
					'margin-top': +realh + 'px'
				})
			}
		}


		$('.preview-small-box').on(tapstart, function() {
			//创建蒙版图层
			$("<div>").prependTo($('body')).addClass('ui-mask');

			//显示大图片
			var imgsrc = "./img/big-pic.jpg",
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
						'width': winWidth,
						'margin-top': +realh + 'px'
					})
				}

			};
		});

		//隐藏大图
		$('.ui-mask').live(tapstart, function() {
			$(this).remove()
		});
	});

});