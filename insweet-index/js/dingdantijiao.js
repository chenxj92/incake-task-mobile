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

	function shh_zf() {
		$('.select_pay li').each(function() {
			var $this = $(this)
			if ($this.find('input').attr('checked')) {
				$this.show();
			} else {
				$this.hide();
			}
		})
	}
	shh_address();
	shh_zf();
	$('.shop_car .address').click(function() {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.add_address').hide();
			shh_address()
		} else {
			$(this).addClass('open');
			$('.list li').show();
			$('.add_address').css('display', 'inline-block')
		}
	});
	//支付方式
	$('.zhifu').click(function() {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			shh_zf();
		} else {
			$(this).addClass('open');
			$('.select_pay li').show();
		}
	});
	$('.yhxx h5,.djkq h5').click(function() {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).parents('.box').find('.tab_content').hide()
		} else {
			$(this).addClass('open');
			$(this).parents('.box').find('.tab_content').show()
		}
	})

	//判断收货人是否为订货人
	function fn_check () {
		if ($('#consignee-switch').attr('checked')) {
			$('#name').parent().hide();
			$('#phone').parent().hide();
		} else {
			$('#name').parent().show();
			$('#phone').parent().show();
		}
	};
	fn_check();
	$('#consignee-switch').click(function() {
		fn_check();
	})
});