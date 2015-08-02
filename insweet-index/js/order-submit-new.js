$(function() {
	//区域选择
	$(".select select").change(function() {
		var Txt = $(this).find("option:selected").text();
		$(this).parents('.select').find('input').val(Txt);
	});
	//配送日期
	$("#peisong-date").on('click', function() {
		$('#mioId').yue_date({
			type: 'notime',
			calTitle: '配送日期',
			callback: function(result) {
				$("#peisong-date").val(result.year + '-' + result.month + '-' + result.day);
			}
		});
	});
	//配送时间a
	$("#time-before").on('click', function() {
		$('#mioId').yue_date({
			type: 'onlytime',
			timeTitle: '配送时间',
			callback: function(result) {
				$("#time-before").val(result.hour + ':' + result.minute);
			}
		});
	});
	//配送时间b
	$("#time-after").on('click', function() {
		$('#mioId').yue_date({
			type: 'onlytime',
			timeTitle: '配送时间',
			callback: function(result) {
				$("#time-after").val(result.hour + ':' + result.minute);
			}
		});
	});
	//判断订货人和收货人是否为同一人
	var funck = new Fncheck();
	$("#hecard").click(function() {
		funck.hecard();
	});
	//代金券
	$("#djkq").click(function() {
		funck.djkq();
	});
});

//封装了一类方法
(function($) {
	var Fncheck = function() {
		var self = this;
		this.init();
	};
	Fncheck.prototype = {
		hecard: function() {
			if ($("#hecard").hasClass('ui-radio-on')) {
				$('#name').parent().hide();
				$('#phone').parent().hide();
			} else {
				$('#name').parent().show();
				$('#phone').parent().show();
			}
		},
		djkq: function() {
			if ($("#djkq").hasClass('ui-radio-on')) {
				$('.kq-msg').show();
			} else {
				$('.kq-msg').hide();
			}
		},
		init: function() {
			this.hecard(); //订货人
			this.djkq(); //代金券
		}
	};
	window["Fncheck"] = Fncheck;
})(jQuery);