//查看更多排行榜
$(function() {
	$('.drop_down').click(function() {
		$('.drop_down_list').toggle();
		$('.drop_down_list li').click(function() {
			var that = $(this),
				Txt = that.find('a').html();
			$('.navigation h1').html(Txt);
			$('.drop_down_list').hide()
		})
	})
})