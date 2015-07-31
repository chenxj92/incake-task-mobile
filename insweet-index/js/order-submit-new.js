$(function() {
	//区域选择
	$(".select select").change(function() {
		var Txt = $(this).find("option:selected").text();
		$(this).parents('.select').find('input').val(Txt);
	});
	//配送时间
	$(".time input").change(function() {
		var Time = $(this).val()
		$(this).parent().find('i').html(Time)
	});
	//判断订货人和收货人是否为同一人
	function hecard() {
		if ($("#hecard").hasClass('ui-radio-on')) {
			$('#name').parent().hide();
			$('#phone').parent().hide();
		} else {
			$('#name').parent().show();
			$('#phone').parent().show();
		}
	};
	hecard();
	$("#hecard").click(function() {
		hecard();
	});
	//代金卡券
	function djkq() {
		if ($("#djkq").hasClass('ui-radio-on')) {
			$('.kq-msg').show();
		} else {
			$('.kq-msg').hide();
		}
	};
	djkq();
	$("#djkq").click(function() {
		djkq();
	});
})