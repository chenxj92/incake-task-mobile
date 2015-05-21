$(function() {
	function a() {
		$('.list li').each(function() {
			var $this = $(this)
			if ($this.find('input').attr('checked')) {
				$this.show();
			} else {
				$this.hide();
			}
		});
	}
	a();
	$('.shop_car .address').click(function() {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.add_address').hide()
			a();

		} else {
			$(this).addClass('open');
			$('.list li').show();
			$('.add_address').css('display','inline-block')
		}
	})
	$('.zhifu').click(function(){
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.select_pay ul').hide();
		} else{
			$(this).addClass('open');
			$('.select_pay ul').show()
		}
	})
});