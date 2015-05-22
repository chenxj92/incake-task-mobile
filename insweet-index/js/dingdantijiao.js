$(function() {
	//收货地址
	function shh_address() {
		$('.list li').each(function() {
			var $this = $(this)
			if ($this.find('input').attr('checked')) {
				$this.show();
			} else {
				$this.hide();
			}
		});
	}
	shh_address();
	$('.shop_car .address').click(function() {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.add_address').hide();
			shh_address()
		} else {
			$(this).addClass('open');
			$('.list li').show();
			$('.add_address').css('display','inline-block')
		}
	});
	//支付方式
	$('.zhifu').click(function(){
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.select_pay ul').hide()
		} else{
			$(this).addClass('open');
			$('.select_pay ul').show()
		}
	})
});