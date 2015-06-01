var saleList = new Swiper('.sale-list', {
	direction: 'horizontal',
	initialSlide: 0,
	onSlideChangeEnd: function(saleList) {
		var _pagenow = saleList.activeIndex,
			title = document.getElementById('list-title-txt');
		switch (_pagenow) {
			case 0:
				title.innerHTML = '蛋糕馆销售排行榜'
				$('.fanye').show()
				break;
			case 1:
				title.innerHTML = '午后茶点销售排行榜'
				$('.fanye').hide()
				break;
		}
	}
});
