$('#menu').click(function(ev){
	var oEvent=ev||event;
	oEvent.stopPropagation();//阻止冒泡事件
	$('#sidebar').show()
	$('.mask').show()
})


$('body').click(function(){
	$('#sidebar').hide()
	$('.mask').hide()
})