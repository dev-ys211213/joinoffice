
// 네비게이션 위치번호 가져오기
var
	nowLocation = new Array()
	,dp1 = null
	,dp2 = null
;

function scNaviToNumber(code)
{
	var
		codeArray = new Array()
		,numArray = new Array()
	;

	for (var i=0; i<4; i++) {
		codeArray.push(code.substr(i*2,2));
	}

	function refunc(depth, n)
	{
		try {
			eval('var dat = navi_cate_' + n + '_code');
			var nn = 0;
			for (var i in dat) {
				if (dat[i].substr(depth*2,2) == codeArray[depth]) {
					numArray.push(nn+1);
					refunc((depth+1), dat[i]);
				}
				nn++;
			}
		}
		catch (error) {
			return false;
		}
	}
	refunc(0, '00000000');

	nowLocation = numArray;
	dp1 = nowLocation[0];
	dp2 = nowLocation[1];
}


$(function(){
	// 변수 선언
	var imageButton = $('.magic-gallery .magic-item > a');
	var popup = $('.img-popup');
	var closeButton = popup.find('> .popup-inner > .close-btn');
	var htmlAndBody = $('html, body');
	var focusTarget;

	// 팝업 생성
	imageButton.on('click', function(e){
		e.preventDefault();
		var popupImg = popup.find('> .popup-inner > img');
		var image = $(this).find('> figure img');
		console.log($(this))
		//console.log($('.magic-gallery .magic-item > a figure img').attr('src'))
		var src = image.attr('src');
		var alt = image.attr('alt');
		focusTarget = $(this);
		popupImg.attr('src', src).attr('alt', alt);
		console.log(popupImg)
		createPopup();
	});

	// 팝업 제거
	popup.on('click', function(){
		removePopup();
	});
	closeButton.on('click', function(e){
		e.preventDefault();
		removePopup();
	});

	// 팝업창 검은배경과 닫기 버튼을 제외한 나머지 부분 클릭시 닫히지 않도록 하기
	popup.find('> .popup-inner').on('click', function(e){
		e.stopPropagation();
	})

	// 팝업 생성 함수
	function createPopup(){
		popup.addClass('active');
		htmlAndBody.css('overflow-y', 'auto');
		setTimeout(function(){
			closeButton.focus();
		}, 50);
	}
	// 팝업 제거 함수
	function removePopup(){
		popup.removeClass('active');
		focusTarget.focus();
		htmlAndBody.css('overflow-y', 'visible');
	}
})