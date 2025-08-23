/*     477935 : 텍스트 오버레이 이미지      */
$(window).on('load resize', function(){
	item_inner_h();
});

function item_inner_h(){
	var $obj = $('.text_over_img__477935__');
	var $max_item_p = 0;

	$obj.each(function(){
		$(this).removeAttr('style');
		if($max_item_p < $(this).find('.caption').height()){
			$max_item_p = $(this).find('.caption').outerHeight() / 2;
		}
		$(this).css('padding-bottom', $max_item_p);
	});
}


/*     477945 : 타이틀 텍스트      */


/*     477955 : 이미지 리스트 (타일형)      */


/*     477965 : 제목&내용 가로형      */


/*     477975 : 제목&내용 가로형      */


/*     477985 : 제목&내용 가로형      */


/*     477995 : 제목&내용 가로형      */


/*     478005 : 제목&내용 가로형      */


/*     478045 : 이미지      */


/*     478055 : 타이틀 텍스트      */


/*     478065 : 장문 텍스트      */


/*     478075 : 이미지      */


/*     478085 : 타이틀 텍스트      */


/*     478095 : 장문 텍스트      */


/*     478105 : 이미지      */


/*     478115 : 타이틀 텍스트      */


/*     478125 : 장문 텍스트      */


/*     478135 : 이미지      */


/*     478145 : 타이틀 텍스트      */


/*     478155 : 장문 텍스트      */


