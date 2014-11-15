$(document).ready(function(){
	var n= "#nav", mobile = 'mobile';
	$(".navicon").on("click", function(){
		if($(n).hasClass(mobile)){
			$(n).animate({height:0}, 300);
			setTimeout(function(){
				$(n).removeClass(mobile).removeAttr('style');
			}, 800);
		}
		else {
			var newHeight = $(n).css('height', 'auto').height();
			$(n).height(0).animate({height:newHeight}, 300);
			setTimeout(function(){
			$(n).addClass(mobile).removeAttr('style');
			}, 800);
		}
	});	

});