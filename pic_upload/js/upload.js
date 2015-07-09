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
			var Img = new Image();
			Img.src = "../img/ditu.jpg";
			$('<img>').prependTo($('body')).attr("src",Img.src)

		});
		$('.ui-mask').live('tap', function() {
			$(this).remove()
		})
	})
});