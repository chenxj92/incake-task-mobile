$(function() {
	//如果是从首页跳转过来的直接弹出录制弹层
	var parm,
		href = window.location.href,
		id = href.indexOf("=");
	if (id > 0) parm = href.substring(id + 1, href.length);
	if (parm == 1) {
		$('.ui_mask').show();
		$('.dialog-record').show()
	}else if(parm == 2){
		$('.musice-list2 .queding').html("使用此音乐制作Voicecake").removeClass('queding').addClass('tijiao')
	}
	
	//点击开始录音按钮
	$('.record').click(function() {
		$('.ui_mask').show();
		$('.dialog-record').show()
	});
	
	//关闭录音弹框
	$('.close').click(function(){
		$('.ui_mask').hide();
		$('.dialog-record').hide()
	});

	//录音
	$('.switch').click(function() {
		if ($(this).hasClass('switch-on')) {
			$(this).removeClass('switch-on');
			$(this).addClass('switch-off');
			$('#bars1').addClass('on')
		} else {
			$(this).removeClass('switch-off');
			$(this).addClass('switch-on');
			$('#bars1').removeClass('on');
			$('.ui_mask').hide();
			$('.dialog-record').hide()
		}
	});

	//列表页删除列表项
	$('.delete-editor').click(function() {
		$(this).parents('li').remove();
	});

	//选择列表项
	$('.musice-list li,.musice-list2 li,.musice-myaudio li').click(function() {
		$('.container li').removeClass('select-on');
		$(this).addClass('select-on')
	});

	$('.start-play').click(function() {
		if ($(this).hasClass('start-play-on')) {
			$('.start-play').removeClass('start-play-on');
		} else {
			$('.start-play').removeClass('start-play-on');
			$(this).addClass('start-play-on')
		}
	});

	//确定背景音乐并开始合成
	$('.musice-list2 .queding').click(function() {
		$('.ui_mask').show();
		$('.dialog-synthetic').show();

		//此处可以写合成后的事件，没有数据先用延时定时器模拟事件操作
		setTimeout(function() {
			window.location.href = "musice-myaudio.html";
		}, 15000)
	});

	//放弃合成
	$('.cancel-btn').click(function() {
		$('.ui_mask').hide();
		$('.dialog-synthetic').hide();
		window.location.href = "musice-myaudio.html";
	});

	//使用音频制作voicecake
	$('.tijiao').click(function() {
		$('.ui_mask').show();
		$('.dialog-success').show()
	});

	//开始选择蛋糕按钮
	$('.start-select').click(function() {
		$('.ui_mask').hide();
		$('.dialog-success').hide()
	});
});