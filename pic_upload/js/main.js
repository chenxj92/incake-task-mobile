require.config({
	paths: {
		"jquery": "jquery-1.8.2.min",
		"zepto": "zepto.min"
	}
})
require(['jquery', 'zepto'], function(jquery, zepto) {
	$(function() {
		$('.preview-small-box').click(function() {
			var Div = $("<div>").prependTo($('body'))
				.addClass('ui-mask')
		});
		$('.ui-mask').live('tap',function(){
			$(this).remove()
		})
	})
});