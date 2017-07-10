$(function(){
	'use strict';

	var sidebar=$('#sidebar'),
		mask=$('.mask'),
		sidebar_triger=$('#menu'),
		backBtn=$('.backTop');

	function showSideBar(){
		mask.fadeIn();
		sidebar.css('right',0);
	}

	function hideSideBar(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	}


	sidebar_triger.on('click',showSideBar);

	mask.on('click',hideSideBar);



	backBtn.on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},800)
	})

	$(window).on('scroll',function(){
		if($(window).scrollTop()>$(window).height())
			backBtn.fadeIn();
		else
			backBtn.fadeOut();
	})

	$(window).trigger('scroll');
	
})

