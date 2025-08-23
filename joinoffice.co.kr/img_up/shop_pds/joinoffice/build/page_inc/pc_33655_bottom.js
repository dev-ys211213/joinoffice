/*     461495 : 이미지 슬라이드 (메인 풀페이지용)      */
if($('#owl_img__461495__').hasClass('style_fullpage')){
	$('#owl_img__461495__').owlCarousel({
		margin: 0,								// 이미지 간격
		loop: true,								// 무한 반복
		center: false,							// 액티브 슬라이드 가운데 정렬
		mouseDrag: false,						// 마우스 드레그 사용
		touchDrag: false,						// 터치 드레그 사용
		stagePadding: 0,						// 스테이지 여백 (좌우 슬라이드 노출)
		nav: true,					// 방향 네비게이션
		dots: true,				// 하단 네비게이션
		dotsEach: false,						// 하단 네비게이션 (페이지별 출력,항목별 출력)
		autoplay: true,							// 자동 재생
		autoplayTimeout: 6000,					// 자동 재생 속도
		smartSpeed: 400,						// 슬라이드 속도
		responsiveRefreshRate: 0,				// 반응형 체크 시간
		startPosition: 0,						// 시작 슬라이드 번호
		autoplayHoverPause: false,				// 마우스 오버시 일시정지
		responsiveClass: false,					// 반응형 class명 사용 (owl-reponsive-0)
		navContainer: '#owl_nav__461495__',					// 방향 네비게이션 커스터마이징
		dotsContainer: '#owl_dots__461495__',					// 하단 네비게이션 커스터마이징
		items:1,								// 한 화면 출력수
		slideBy:1,								// 한번에 슬라이드 되는 수
		animateOut: ''	// 슬라이드(''), 페이드(fadeOut)
	});

	$('.pm-slide_wide__461495__').parent().addClass('height100');
	$('.pm-slide_wide__461495__').closest('.row').addClass('height100');
	$('.pm-slide_wide__461495__').closest('.row').parent().addClass('height100');
	$('.pm-slide_wide__461495__').closest('.row').children().addClass('height100');
	$('.pm-slide_wide__461495__').closest('.col').addClass('height100');
	$('.pm-slide_wide__461495__').closest('.col').parent().addClass('height100');
	$('.pm-slide_wide__461495__').closest('.col').children().addClass('height100');
	$('.contents_wrap').addClass('height100');
	$('#container').addClass('height100');
	$('#main_view').addClass('height100');
	$('#sub_view').addClass('height100');
	$('#viewport').addClass('height100');
}else if($('#owl_img__461495__').hasClass('style_normal')){
	var
		def = $.Deferred()
		$owl = $('#owl_img__461495__')
	;

	changeSrc($owl,def);

	$(window).on('resize',function(){
		changeSrc($owl,def);
	});

	def.promise().done(function(){
		loadCarousel($owl);
	});

	function changeSrc($owl,def){
		if(Modernizr.mq('only all and (min-width:768px)')==true){
			$owl.find('.main_img').each(function(){
				$(this).attr('src',$(this).attr('data-src'));
			});
		}else{
			$owl.find('.main_img').each(function(){
				$(this).attr('src',$(this).attr('data-src-m'));
			});
		}
		def.resolve(true);
	}

	function loadCarousel($owl){
		$owl.owlCarousel({
			margin: 0,								// 이미지 간격
			loop: true,								// 무한 반복
			center: false,							// 액티브 슬라이드 가운데 정렬
			mouseDrag: false,						// 마우스 드레그 사용
			touchDrag: false,						// 터치 드레그 사용
			stagePadding: 0,						// 스테이지 여백 (좌우 슬라이드 노출)
			nav: true,					// 방향 네비게이션
			dots: true,				// 하단 네비게이션
			dotsEach: false,						// 하단 네비게이션 (페이지별 출력,항목별 출력)
			autoplay: true,							// 자동 재생
			autoplayTimeout: 6000,					// 자동 재생 속도
			smartSpeed: 400,						// 슬라이드 속도
			responsiveRefreshRate: 0,				// 반응형 체크 시간
			startPosition: 0,						// 시작 슬라이드 번호
			autoplayHoverPause: false,				// 마우스 오버시 일시정지
			responsiveClass: false,					// 반응형 class명 사용 (owl-reponsive-0)
			navContainer: '#owl_nav__461495__',					// 방향 네비게이션 커스터마이징
			dotsContainer: '#owl_dots__461495__',					// 하단 네비게이션 커스터마이징
			items:1,								// 한 화면 출력수
			slideBy:1,								// 한번에 슬라이드 되는 수
			animateOut: ''	// 슬라이드(''), 페이드(fadeOut)
		});
	}
}

/*     460655 : 이미지 + 텍스트 박스      */


/*     460665 : 이미지 + 텍스트 박스      */


/*     460675 : 이미지 + 텍스트 박스      */


/*     460725 : 이미지 + 텍스트 박스      */


/*     460735 : 이미지 + 텍스트 박스      */


/*     460745 : 이미지 + 텍스트 박스      */


/*     461325 : 타이틀      */


/*     461335 : 이미지 리스트      */
jQuery(function($){
	$(window).on('load resize', function(){
		item_caption_h();
	});

	function item_caption_h(){
		var $obj = $('.img_tile__461335__');
		var $max_height = 0;

		$obj.find('.img_inner .item .item_inner .caption').removeAttr('style');
		$obj.find('.img_inner .item').each(function(){
			if($max_height < $(this).find('.item_inner .caption').height()){
				$max_height = $(this).find('.item_inner .caption').height();
			}
		});
		$obj.find('.img_inner .item .item_inner .caption').height($max_height);
	}
});

/*     461285 : 구글 지도 (주소 직접 입력)      */
// 타이틀, 주소, 가로, 세로, 줌
// 주소를 입력하지 않으면 접속한 회원의 현재위치를 출력한다.
google_map_addr("조인오피스","충남 천안시 동남구 터미널3길 37  신부동, 은본빌딩",600,400,16,'google_map__461285__');

/*     461295 : 최근 게시글 - 목록 (박스형)      */


/*     461305 : 아이콘 + 글 박스      */


/*     461315 : 고객센터      */


