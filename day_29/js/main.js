$(function(){
    'use strict';

    var sidebar=$('#sidebar'),
        mask=$('.mask'),
        backBtn=$('.backTop'),
        sidebar_trigger=$('#menu');
    function showSidebar(){
        mask.fadeIn();
        sidebar.css('right',0);
    }
    function hideSidebar(){
        mask.fadeOut();
        sidebar.css('right',-sidebar.width());
    }
    sidebar_trigger.on('click',showSidebar)
    mask.on('click',hideSidebar)


    backBtn.on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },800)
    })

    $(window).on('scroll',function(){
        if($(window).scrollTop()>$(window).height())
            backBtn.fadeIn()
        else
            backBtn.fadeOut()



    })



})