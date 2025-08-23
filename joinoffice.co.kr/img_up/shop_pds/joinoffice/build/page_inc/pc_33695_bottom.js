/*     478165 : 텍스트 오버레이 이미지      */
$(window).on('load resize', function(){
	item_inner_h();
});

function item_inner_h(){
	var $obj = $('.text_over_img__478165__');
	var $max_item_p = 0;

	$obj.each(function(){
		$(this).removeAttr('style');
		if($max_item_p < $(this).find('.caption').height()){
			$max_item_p = $(this).find('.caption').outerHeight() / 2;
		}
		$(this).css('padding-bottom', $max_item_p);
	});
}


/*     478175 : 번호 입력형 타이틀      */


/*     478185 : 장문 텍스트      */


/*     478195 : 번호 입력형 타이틀      */


/*     478205 : 장문 텍스트      */


/*     478215 : 표 2.0      */


