$(function(){
	// 필수 스크립트
	// voice
	$("body").on({
		click : function(e){
			var onoff="on";
			if($(e.target).hasClass("state_voice_on")) onoff="off";
			SetCookie('bg_voice_onoff',onoff);
			if(onoff == 'on'){
				$("#voice_guide_wrap").addClass("off").removeClass("on");
			}else{
				$("#voice_guide_wrap").addClass("on").removeClass("off");
			}
			if(document.getElementById('bg_voice_player')){
				if(onoff == 'off'){
					// 현재 재생 중이면 stop() 처리
					document.getElementById('bg_voice_player').pause();
					document.getElementById('bg_voice_player').currentTime = 0;
				}else{
					// 다시 paly() 처리
					document.getElementById('bg_voice_player').play();
				}
			}
			return false;
		}
	}, "#voice_guide_wrap > a");

//toggle
	$('.side_menu [role=toggle] > a').on('click', function(e){
		var
		$li = $(this).parent()
		,$lis = $(this).closest('ul').children()
		,$active = $(this).parent().parent().children('.active')
		;
		if ($li.hasClass('active')){
			$li.removeClass('active');
		} else {
			$active.removeClass('active');
			$li.addClass('active');
		}
		return false;
	});

//side
	$('#toggle_left, #toggle_right').on('click',function(e){
		if(!$(this).hasClass("on")){
			close_toggle();
			$(this).addClass('on');
			$("#viewport").addClass("on "+$(this).attr("id"));
			return false;
		}else{
			close_toggle();
		}
	});

	$('#close_side').on('click',function(){
		close_toggle();
	});
	function close_toggle(){
		$('#toggle_left, #toggle_right').removeClass('on');
		$("#viewport").removeClass("on toggle_left toggle_right");
		return false;
	}

	//상단으로 이동
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 300){
			$('#btn_site_top').addClass('on');
		}else{
			$('#btn_site_top').removeClass('on');
		}
		if($(window).scrollTop() > 10){
			$('#header').addClass('on');
		}else{
			$('#header').removeClass('on');
		}
	});

	$('#btn_site_top').click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, 800);

		return false;
	});

	function mypage_snb(target){
		if(target.scrollLeft()<40){
			target.parent().find(".prev").hide();
		}else{
			target.parent().find(".prev").show();
		}
		if(target.scrollLeft()-40<target.find(".dep1").width()-target.parent().width()){
			target.parent().find(".next").show();
		}else{
			target.parent().find(".next").hide();
		}
	}
	$(".snb > div").scroll(function(){
		mypage_snb($(this));
	});
	mypage_snb($(".snb > div"));
	if($(".snb > div").find(".on").length>0) $(".snb > div").scrollLeft($(".snb > div").find(".on").offset().left-$(".snb > div").width()/2+$(".snb > div").find(".on").width()/2);

	//PC LNB
	var $lnb_pc = $('.lnb_p');

	$lnb_pc.find('.dep1 > li').on('mouseenter', function(){
		$(this).find('> div').slideDown(200);
	});

	$lnb_pc.find('.dep1 > li').on('mouseleave', function(){
		$(this).find('> div').hide();
		$(this).find('.dep2 > li > a').removeAttr('style');
	});

	//PC LNB 전체
	var $lnb_p_all_wrap = $('#lnb_p_all_wrap');
	var $lnb_p_all_open = $lnb_p_all_wrap.find('.btn_lnb_all_p');
	var $lnb_p_all_close = $lnb_p_all_wrap.find('.btn_lnb_all_close');

	$lnb_p_all_open.on('click', function(){
		if($('#header').hasClass('all_nav_view')){
			$('#header').removeClass('all_nav_view');
			$lnb_p_all_wrap.removeClass('on');
		}else{
			$('#header').addClass('all_nav_view');
			$('#header_over_bg').remove();
			$lnb_p_all_wrap.addClass('on');
		}
		return false;
	});

	$lnb_p_all_close.on('click', function(){
		if($('#header').hasClass('all_nav_view')){
			$('#header').removeClass('all_nav_view');
			$lnb_p_all_wrap.removeClass('on');
		}else{
			$('#header').addClass('all_nav_view');
			$lnb_p_all_wrap.addClass('on');
			$('#header_over_bg').remove();
		}
		return false;
	});

	//PC 상단 검색폼
	$('.header_form .btn_header_form').on('click', function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
			$('.lnb_p .dep1 > li > div').removeAttr('style');
		}else{
			$(this).parent().addClass('on');
			$(this).parent().find('.search_p .search_form input[type=text]').focus();
			$('.gnb_p .gnb_list').removeClass('on');
			$('.lnb_p .dep1 > li > div').hide();
		}
	});

	//PC GNB
	$('.gnb_p .gnb_list .btn_gnb_list').on('click', function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
			$('.lnb_p .dep1 > li > div').removeAttr('style');
		}else{
			$(this).parent().addClass('on');
			$('.header_form').removeClass('on');
			$('.lnb_p .dep1 > li > div').hide();
		}
	});

	$('#header > .inner').on('mouseleave', function(){
		$('.header_form').removeClass('on');
		$('.gnb_p .gnb_list').removeClass('on');
		$('.lnb_p .dep1 > li > div').removeAttr('style');
	});

	//mobile snb
	var $snb = $('.snb');
	var $snb_dep1 = $snb.find('.dep1');
	$snb.find('.m_snb_toggle').on('click', function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$snb_dep1.removeClass('on');
		}else{
			$(this).addClass('on');
			$snb_dep1.addClass('on');
		}
		return false;
	});
})
