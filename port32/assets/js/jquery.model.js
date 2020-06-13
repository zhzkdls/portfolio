
$(document).ready(function() {	
	$('a[name=modal]').click(function(e) {
		e.preventDefault();
		
		var id = $(this).attr('href');
		
		//화면의 높이 너비를 구한다.
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		//마스크의 높이와 너비를 화면의 것으로 만들어 전체 화면을 채운다.

		$('#mask').css({'width':maskWidth,'height':maskHeight});
		
		$('#mask').fadeIn(500);      	 
		//$('#mask').fadeTo("fast",0.5); 초반 오류로 잠시 숨겨둠	
	
		var winH = $(window).height();
		var winW = $(window).width();
              
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
		
		//window 효과,속도
		$(id).fadeIn(500); 

		$('body').css('overflow', 'hidden'); //레이어팝업 클릭시 바디 고정
	});
	
	$('.window .close').click(function (e) {
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
		
	});		
	
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
		$('body').css('overflow', 'visible'); //닫을 시 스크롤 다시 가능하게함
	});			

	//터치 스크린에서 실수로 레이어 닫는 경우를 막으려면
	$('#mask').one('touchstart', function () {  
		$(this).unbind('click');
		alert('터치 이벤트일 때는 아무 일도 안 일어난다.');
	});

	
});
